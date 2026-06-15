import { useEffect, useMemo, useState } from "react";
import { BarChart3, Brain, Database, Home } from "lucide-react";
import { AnalyticsView } from "./components/AnalyticsView";
import { NavButton } from "./components/common";
import { HomeView } from "./components/HomeView";
import { ReviewView } from "./components/ReviewView";
import { VocabularyView } from "./components/VocabularyView";
import { buildAnalyticsSummary } from "./lib/analyticsSummary";
import { isDue } from "./lib/analytics";
import { levelOptions } from "./lib/options";
import { getPracticeCount } from "./lib/practice";
import { applyReviewRating, createReviewAttempt, emptySessionStats, repairScore, reviewResult } from "./lib/review";
import { loadAttempts, loadImports, loadPracticeSize, loadVocabulary, saveAttempts, savePracticeSize, saveVocabulary } from "./lib/storage";
import { createSuggestedSetup, createVocabularyItem, emptyAddWordForm, findDuplicateVocabulary, hasRequiredAddWordFields } from "./lib/vocabulary";
import type { AddWordForm } from "./lib/vocabulary";
import type { CefrLevel, PracticeSize, ReviewRating, VocabularyItem } from "./lib/types";
import type { SessionStats } from "./lib/review";

type View = "home" | "vocabulary" | "review" | "analytics";

function App() {
  const [view, setView] = useState<View>("home");
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(() => loadVocabulary());
  const [attempts, setAttempts] = useState(() => loadAttempts());
  const [imports] = useState(() => loadImports());
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<"All" | CefrLevel>("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddWord, setShowAddWord] = useState(false);
  const [addWordForm, setAddWordForm] = useState<AddWordForm>(emptyAddWordForm);
  const [addWordError, setAddWordError] = useState("");
  const [sessionStats, setSessionStats] = useState<SessionStats>(emptySessionStats);
  const [practiceSize, setPracticeSize] = useState<PracticeSize>(() => loadPracticeSize());
  const [reviewSessionIds, setReviewSessionIds] = useState<string[]>([]);

  useEffect(() => saveVocabulary(vocabulary), [vocabulary]);
  useEffect(() => saveAttempts(attempts), [attempts]);
  useEffect(() => savePracticeSize(practiceSize), [practiceSize]);

  const dueWords = useMemo(() => vocabulary.filter((word) => isDue(word)).sort((a, b) => repairScore(b) - repairScore(a)), [vocabulary]);
  const reviewSessionWords = useMemo(() => {
    const sessionIds = new Set(reviewSessionIds);
    return dueWords.filter((word) => sessionIds.has(word.id));
  }, [dueWords, reviewSessionIds]);
  const activeReviewWord = reviewSessionWords[0];
  const analytics = useMemo(() => buildAnalyticsSummary(vocabulary, attempts, imports), [attempts, imports, vocabulary]);
  const levels: readonly ("All" | CefrLevel)[] = ["All", ...levelOptions];
  const filteredVocabulary = useMemo(() => {
    const normalizedQuery = query.toLowerCase();

    return vocabulary.filter((word) => {
      const matchesQuery = [word.french, word.meaning, word.level, word.source, ...(word.synonymLadder ?? []), ...(word.wordFamily ?? []), ...word.structures]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
      const matchesLevel = levelFilter === "All" || word.level === levelFilter;

      return matchesQuery && matchesLevel;
    });
  }, [levelFilter, query, vocabulary]);

  useEffect(() => {
    if (view === "review" || sessionStats.reviewed === 0 || reviewSessionWords.length > 0) return;

    setSessionStats(emptySessionStats);
    setReviewSessionIds([]);
  }, [reviewSessionWords.length, sessionStats.reviewed, view]);

  const reviewWord = (rating: ReviewRating) => {
    if (!activeReviewWord) return;

    const result = reviewResult(rating);
    const now = new Date().toISOString();
    const attempt = createReviewAttempt(activeReviewWord.id, rating, now);

    setAttempts((existing) => [attempt, ...existing]);
    setSessionStats((stats) => ({
      reviewed: stats.reviewed + 1,
      correct: result === "correct" ? stats.correct + 1 : stats.correct,
      again: rating === "Again" ? stats.again + 1 : stats.again,
      reviewedIds: [...stats.reviewedIds, activeReviewWord.id],
      reviews: [
        ...stats.reviews,
        {
          wordId: activeReviewWord.id,
          french: activeReviewWord.french,
          meaning: activeReviewWord.meaning,
          rating,
          result
        }
      ]
    }));
    setVocabulary((items) => items.map((word) => (word.id === activeReviewWord.id ? applyReviewRating(word, rating, now) : word)));
  };

  const updateWord = (id: string, patch: Partial<VocabularyItem>) => {
    setVocabulary((items) => items.map((word) => (word.id === id ? { ...word, ...patch } : word)));
  };

  const openAddWord = () => {
    setView("vocabulary");
    setShowAddWord(true);
    setAddWordError("");
  };

  const startReview = () => {
    const targetCount = getPracticeCount(practiceSize, dueWords.length);
    setReviewSessionIds(dueWords.slice(0, targetCount).map((word) => word.id));
    setSessionStats(emptySessionStats);
    setView("review");
  };

  const resetReviewSession = () => {
    if (sessionStats.reviewedIds.length === 0) return;

    const reviewedIds = new Set(sessionStats.reviewedIds);
    const now = new Date().toISOString();
    setVocabulary((items) => items.map((word) => (reviewedIds.has(word.id) ? { ...word, dueAt: now } : word)));
    setSessionStats(emptySessionStats);
    setView("review");
  };

  const applySuggestedSetup = () => {
    const suggestion = createSuggestedSetup(addWordForm);
    setAddWordForm((form) => ({
      ...form,
      example: form.example || suggestion.example,
      translation: form.translation || suggestion.translation,
      structures: form.structures || suggestion.structures,
      tags: form.tags || suggestion.tags,
      partOfSpeech: suggestion.partOfSpeech,
      source: suggestion.source
    }));
  };

  const addVocabularyWord = () => {
    const french = addWordForm.french.trim();

    if (!hasRequiredAddWordFields(addWordForm)) {
      setAddWordError("Add the French word and confirm the meaning before saving.");
      return;
    }

    const duplicate = findDuplicateVocabulary(vocabulary, french);
    if (duplicate) {
      setAddWordError(`"${duplicate.french}" already exists in your vocabulary database.`);
      setQuery(duplicate.french);
      return;
    }

    const newWord = createVocabularyItem(addWordForm, new Date().toISOString());
    setVocabulary((items) => [newWord, ...items]);
    setQuery(newWord.french);
    setLevelFilter("All");
    setShowAddWord(false);
    setAddWordForm(emptyAddWordForm);
    setAddWordError("");
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">F</div>
          <div>
            <strong>Apprentissage</strong>
            <span>Vocabulary coach</span>
          </div>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          <NavButton active={view === "home"} icon={<Home size={18} />} label="Home" onClick={() => setView("home")} />
          <NavButton active={view === "vocabulary"} icon={<Database size={18} />} label="Vocabulary" onClick={() => setView("vocabulary")} />
          <NavButton active={view === "review"} icon={<Brain size={18} />} label="Review" onClick={() => setView("review")} />
          <NavButton active={view === "analytics"} icon={<BarChart3 size={18} />} label="Analytics" onClick={() => setView("analytics")} />
        </nav>

        <div className="side-panel">
          <span className="eyebrow">Today</span>
          <strong>{dueWords.length} due</strong>
          <span>{analytics.streak.reviewsNeeded === 0 ? "Streak maintained" : `${analytics.streak.reviewsNeeded} reviews to maintain streak`}</span>
        </div>
      </aside>

      <main className="main">
        {view === "home" && (
          <HomeView
            vocabulary={vocabulary}
            attempts={attempts}
            dueWords={dueWords}
            analytics={analytics}
            onStartReview={() => setView("review")}
            onAddWord={openAddWord}
          />
        )}

        {view === "vocabulary" && (
          <VocabularyView
            levelFilter={levelFilter}
            levels={levels}
            editingId={editingId}
            filteredVocabulary={filteredVocabulary}
            query={query}
            setLevelFilter={setLevelFilter}
            setEditingId={setEditingId}
            setQuery={setQuery}
            showAddWord={showAddWord}
            addWordForm={addWordForm}
            addWordError={addWordError}
            setShowAddWord={setShowAddWord}
            setAddWordForm={setAddWordForm}
            applySuggestedSetup={applySuggestedSetup}
            addVocabularyWord={addVocabularyWord}
            updateWord={updateWord}
          />
        )}

        {view === "review" && (
          <ReviewView
            dueWords={dueWords}
            practiceSize={practiceSize}
            remainingSessionWords={reviewSessionWords}
            sessionStats={sessionStats}
            sessionTargetCount={reviewSessionIds.length}
            streak={analytics.streak}
            word={activeReviewWord}
            onPracticeSizeChange={setPracticeSize}
            onResetReview={resetReviewSession}
            onStartReview={startReview}
            onRate={reviewWord}
          />
        )}

        {view === "analytics" && <AnalyticsView vocabulary={vocabulary} attempts={attempts} dueWords={dueWords} analytics={analytics} />}
      </main>
    </div>
  );
}

export default App;
