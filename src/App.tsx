import { useEffect, useMemo, useState } from "react";
import { Activity, BookText, Brain, LayoutGrid, Moon } from "lucide-react";
import { OverviewView } from "./components/OverviewView";
import { ReviewView } from "./components/ReviewView";
import { TrackView } from "./components/TrackView";
import { WordsView } from "./components/WordsView";
import { isDue } from "./lib/analytics";
import { buildAnalyticsSummary } from "./lib/analyticsSummary";
import { getPracticeCount } from "./lib/practice";
import { applyReviewRating, createReviewAttempt, emptySessionStats, repairScore, reviewResult } from "./lib/review";
import {
  loadAttempts,
  loadImports,
  loadPracticeSize,
  loadVocabulary,
  saveAttempts,
  savePracticeSize,
  saveVocabulary
} from "./lib/storage";
import { normalizeTerm } from "./lib/terms";
import { loadTheme, nextTheme, saveTheme, themeLabels } from "./lib/themes";
import type { ThemeName } from "./lib/themes";
import type { SessionStats } from "./lib/review";
import type { PracticeSize, ReviewRating, VocabularyItem } from "./lib/types";

type Tab = "overview" | "words" | "review" | "track";

const TABS: { id: Tab; label: string; icon: typeof LayoutGrid }[] = [
  { id: "overview", label: "overview", icon: LayoutGrid },
  { id: "words", label: "words", icon: BookText },
  { id: "review", label: "review", icon: Brain },
  { id: "track", label: "track", icon: Activity }
];

function App() {
  const [tab, setTab] = useState<Tab>("overview");
  const [theme, setTheme] = useState<ThemeName>(() => loadTheme());
  const [vocabulary, setVocabulary] = useState(() => loadVocabulary());
  const [attempts, setAttempts] = useState(() => loadAttempts());
  const [imports] = useState(() => loadImports());
  const [practiceSize, setPracticeSize] = useState<PracticeSize>(() => loadPracticeSize());
  const [reviewSessionIds, setReviewSessionIds] = useState<string[]>([]);
  const [sessionStats, setSessionStats] = useState<SessionStats>(emptySessionStats);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);
  useEffect(() => saveVocabulary(vocabulary), [vocabulary]);
  useEffect(() => saveAttempts(attempts), [attempts]);
  useEffect(() => savePracticeSize(practiceSize), [practiceSize]);

  const dueWords = useMemo(
    () => vocabulary.filter((word) => isDue(word)).sort((a, b) => repairScore(b) - repairScore(a)),
    [vocabulary]
  );
  const reviewSessionWords = useMemo(() => {
    const sessionIds = new Set(reviewSessionIds);
    return dueWords.filter((word) => sessionIds.has(word.id));
  }, [dueWords, reviewSessionIds]);
  const activeReviewWord = reviewSessionWords[0];
  const analytics = useMemo(() => buildAnalyticsSummary(vocabulary, attempts, imports), [attempts, imports, vocabulary]);

  // Clear a finished session once the user leaves the review tab.
  useEffect(() => {
    if (tab === "review" || sessionStats.reviewed === 0 || reviewSessionWords.length > 0) return;
    setSessionStats(emptySessionStats);
    setReviewSessionIds([]);
  }, [reviewSessionWords.length, sessionStats.reviewed, tab]);

  const startReview = () => {
    const targetCount = getPracticeCount(practiceSize, dueWords.length);
    setReviewSessionIds(dueWords.slice(0, targetCount).map((word) => word.id));
    setSessionStats(emptySessionStats);
    setTab("review");
  };

  const rateWord = (rating: ReviewRating) => {
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
        { wordId: activeReviewWord.id, french: activeReviewWord.french, meaning: activeReviewWord.meaning, rating, result }
      ]
    }));
    setVocabulary((items) => items.map((word) => (word.id === activeReviewWord.id ? applyReviewRating(word, rating, now) : word)));
  };

  const resetReviewSession = () => {
    if (sessionStats.reviewedIds.length === 0) return;

    const reviewedIds = new Set(sessionStats.reviewedIds);
    const now = new Date().toISOString();
    setVocabulary((items) => items.map((word) => (reviewedIds.has(word.id) ? { ...word, dueAt: now } : word)));
    setSessionStats(emptySessionStats);
  };

  // Exit the active session and return to the review start page.
  const endReview = () => {
    setReviewSessionIds([]);
    setSessionStats(emptySessionStats);
  };

  const addWords = (incoming: VocabularyItem[]) =>
    setVocabulary((items) => {
      const seen = new Set(items.map((word) => normalizeTerm(word.french)));
      const fresh = incoming.filter((word) => {
        const key = normalizeTerm(word.french);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      return [...fresh, ...items];
    });
  const updateWord = (id: string, patch: Partial<VocabularyItem>) =>
    setVocabulary((items) => items.map((word) => (word.id === id ? { ...word, ...patch } : word)));

  return (
    <div className="app">
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="header">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">fr</span>
          <span className="logo">french vocab</span>
        </div>
        <button className="theme-btn" onClick={() => setTheme((current) => nextTheme(current))} aria-label="Change theme">
          <Moon size={15} />
          <span>theme: {themeLabels[theme]}</span>
        </button>
      </header>

      <main className="stage">
        <nav className="nav" aria-label="Sections">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`nav-pill${tab === id ? " active" : ""}`}
              onClick={() => setTab(id)}
              aria-current={tab === id ? "page" : undefined}
            >
              <Icon size={15} />
              {label}
            </button>
          ))}
        </nav>

        {tab === "overview" && (
          <OverviewView
            vocabulary={vocabulary}
            attempts={attempts}
            dueWords={dueWords}
            analytics={analytics}
            onStartReview={startReview}
          />
        )}

        {tab === "review" && (
          <ReviewView
            word={activeReviewWord}
            dueWords={dueWords}
            remainingSessionWords={reviewSessionWords}
            sessionStats={sessionStats}
            sessionTargetCount={reviewSessionIds.length}
            practiceSize={practiceSize}
            onPracticeSizeChange={setPracticeSize}
            onStartReview={startReview}
            onResetReview={resetReviewSession}
            onEndReview={endReview}
            onRate={rateWord}
          />
        )}

        {tab === "track" && <TrackView vocabulary={vocabulary} attempts={attempts} analytics={analytics} />}

        {tab === "words" && <WordsView vocabulary={vocabulary} onAddWords={addWords} onUpdateWord={updateWord} />}
      </main>

      <footer className="footer-note">
        Built with <span className="footer-heart">♥</span> by{" "}
        <a href="https://www.timilawal.com" target="_blank" rel="noreferrer">
          Timi Lawal
        </a>
      </footer>
    </div>
  );
}

export default App;
