import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  Flame,
  Home,
  LineChart,
  ListFilter,
  Pencil,
  Play,
  Plus,
  RotateCcw,
  Save,
  Search,
  Sparkles,
  Target
} from "lucide-react";
import { accuracy, byStatus, countBy, difficultWords, importGrowth, isDue, reviewVolumeLast7Days, streakSummary, tcfReadiness } from "./lib/analytics";
import { loadAttempts, loadImports, loadVocabulary, saveAttempts, saveVocabulary } from "./lib/storage";
import type { CefrLevel, Priority, ReviewAttempt, ReviewRating, VocabularyItem, VocabularyStatus } from "./lib/types";

type View = "home" | "vocabulary" | "review" | "analytics";
type SessionStats = { reviewed: number; correct: number; again: number; reviewedIds: string[] };

const statusOrder: VocabularyStatus[] = ["New", "Learning", "Familiar", "Active", "Mastered"];
const levelOptions: CefrLevel[] = ["B1", "B2", "C1", "Unknown"];
const statusOptions: VocabularyStatus[] = ["New", "Learning", "Familiar", "Active", "Mastered"];
const priorityOptions: Priority[] = ["Low", "Medium", "High"];

type AddWordForm = {
  french: string;
  meaning: string;
  level: CefrLevel;
  partOfSpeech: string;
  example: string;
  translation: string;
  structures: string;
  synonymLadder: string;
  wordFamily: string;
  tcfPriority: Priority;
  source: string;
  tags: string;
};

const emptyAddWordForm: AddWordForm = {
  french: "",
  meaning: "",
  level: "B2",
  partOfSpeech: "expression",
  example: "",
  translation: "",
  structures: "",
  synonymLadder: "",
  wordFamily: "",
  tcfPriority: "Medium",
  source: "Manual entry",
  tags: "manual"
};

const emptySessionStats: SessionStats = { reviewed: 0, correct: 0, again: 0, reviewedIds: [] };

const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

const addMinutes = (minutes: number) => new Date(Date.now() + minutes * 60 * 1000).toISOString();

const scheduleByRating: Record<ReviewRating, number> = {
  Again: 0,
  Hard: 1,
  Good: 3,
  Easy: 7
};

const advanceStatus = (status: VocabularyStatus, rating: ReviewRating): VocabularyStatus => {
  if (rating === "Again") return status === "New" ? "New" : "Learning";
  if (rating === "Hard") return status === "New" ? "Learning" : status;
  const index = statusOrder.indexOf(status);
  return statusOrder[Math.min(index + (rating === "Easy" ? 2 : 1), statusOrder.length - 1)];
};

const learnerStatus = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[]) => {
  const masteredCount = vocabulary.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const dueCount = vocabulary.filter((word) => isDue(word)).length;
  const highPriority = tcfReadiness(vocabulary, attempts);

  if (dueCount > 10) return "TCF Review Sprint";
  if (highPriority.accuracy >= 80 && masteredCount > vocabulary.length * 0.35) return "Strengthening Active Recall";
  if (masteredCount > vocabulary.length * 0.2) return "Building B2 Range";
  return "Building B2 Foundation";
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  });

const normalizeTerm = (value: string) => {
  const base = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s*[,/]\s*/g, " ")
    .replace(/\s+/g, " ");
  const withoutArticle = base.replace(/^(un|une|le|la|les|l')\s+/, "");
  const parts = withoutArticle.split(" ");

  if (parts.length === 2 && parts[1].startsWith(parts[0]) && parts[1].length <= parts[0].length + 3) {
    return parts[0];
  }

  return withoutArticle;
};

const slugifyTerm = (value: string) =>
  normalizeTerm(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const uniqueList = (items: string[]) => [...new Set(items.map((item) => item.trim()).filter(Boolean))];

const isRepairWord = (word: VocabularyItem) => word.tags.includes("repair") || word.lapses >= 2;

const repairScore = (word: VocabularyItem) => (isRepairWord(word) ? 100 : 0) + word.lapses * 8 - word.successStreak;

const looksLikeUsagePattern = (value: string) => /[+]/.test(value) || /\b(infinitif|nom|phrase|personne|lieu|objet|que)\b/i.test(value);

const getSynonymLadder = (word: VocabularyItem) => uniqueList(word.synonymLadder ?? []).filter((item) => !looksLikeUsagePattern(item)).slice(0, 4);

const getWordFamily = (word: VocabularyItem) =>
  uniqueList(word.wordFamily ?? []).filter((item) => !looksLikeUsagePattern(item) && normalizeTerm(item) !== normalizeTerm(word.french)).slice(0, 4);

const getUsagePatterns = (word: VocabularyItem) => uniqueList([...word.structures, ...(word.wordFamily ?? []).filter(looksLikeUsagePattern)]).slice(0, 2);

const nextDueForRating = (rating: ReviewRating, nextLapses: number) => {
  if (rating === "Again") return addMinutes(nextLapses >= 2 ? 5 : 10);
  if (rating === "Hard") return nextLapses >= 2 ? addMinutes(30) : addDays(scheduleByRating[rating]);
  return addDays(scheduleByRating[rating]);
};

const createSuggestedSetup = (form: AddWordForm) => {
  const french = form.french.trim() || "ce mot";
  const meaning = form.meaning.trim() || "this idea";
  return {
    example: `Il est utile de savoir employer « ${french} » dans un contexte formel.`,
    translation: `It is useful to know how to use "${french}" in a formal context.`,
    structures: form.structures.trim() || `${french} dans un contexte formel`,
    synonymLadder: form.synonymLadder.trim(),
    wordFamily: form.wordFamily.trim(),
    tags: form.tags.trim() || "manual, needs-practice",
    partOfSpeech: form.partOfSpeech.trim() || (french.includes(" ") ? "expression" : "word"),
    source: form.source.trim() || "Manual entry",
    meaning
  };
};

function App() {
  const [view, setView] = useState<View>("home");
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(() => loadVocabulary());
  const [attempts, setAttempts] = useState<ReviewAttempt[]>(() => loadAttempts());
  const [imports] = useState(() => loadImports());
  const [query, setQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<"All" | CefrLevel>("All");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddWord, setShowAddWord] = useState(false);
  const [addWordForm, setAddWordForm] = useState<AddWordForm>(emptyAddWordForm);
  const [addWordError, setAddWordError] = useState("");
  const [sessionStats, setSessionStats] = useState<SessionStats>(emptySessionStats);

  useEffect(() => saveVocabulary(vocabulary), [vocabulary]);
  useEffect(() => saveAttempts(attempts), [attempts]);

  const dueWords = useMemo(() => vocabulary.filter((word) => isDue(word)).sort((a, b) => repairScore(b) - repairScore(a)), [vocabulary]);
  const activeReviewWord = dueWords[0];
  const analytics = useMemo(() => {
    const weak = difficultWords(vocabulary, attempts);
    const tcf = tcfReadiness(vocabulary, attempts);
    return {
      statusCounts: byStatus(vocabulary),
      levelCounts: countBy(vocabulary, (word) => word.level),
      sourceCounts: countBy(vocabulary, (word) => word.source),
      weak,
      tcf,
      streak: streakSummary(attempts),
      accuracy: accuracy(attempts),
      reviewVolume: reviewVolumeLast7Days(attempts),
      importedTotal: importGrowth(imports)
    };
  }, [attempts, imports, vocabulary]);

  const levels = ["All", ...levelOptions] as ("All" | CefrLevel)[];
  const filteredVocabulary = vocabulary.filter((word) => {
    const matchesQuery = [word.french, word.meaning, word.level, word.source, ...(word.synonymLadder ?? []), ...(word.wordFamily ?? []), ...word.structures]
      .join(" ")
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesLevel = levelFilter === "All" || word.level === levelFilter;
    return matchesQuery && matchesLevel;
  });

  const reviewWord = (rating: ReviewRating) => {
    if (!activeReviewWord) return;

    const result = rating === "Again" || rating === "Hard" ? "incorrect" : "correct";
    const now = new Date().toISOString();
    const attempt: ReviewAttempt = {
      id: crypto.randomUUID(),
      wordId: activeReviewWord.id,
      mode: "Flashcards",
      direction: "French -> English",
      result,
      rating,
      createdAt: now,
      responseTimeMs: Math.round(2400 + Math.random() * 5000)
    };

    setAttempts((existing) => [attempt, ...existing]);
    setSessionStats((stats) => ({
      reviewed: stats.reviewed + 1,
      correct: result === "correct" ? stats.correct + 1 : stats.correct,
      again: rating === "Again" ? stats.again + 1 : stats.again,
      reviewedIds: [...stats.reviewedIds, activeReviewWord.id]
    }));
    setVocabulary((items) =>
      items.map((word) => {
        if (word.id !== activeReviewWord.id) return word;
        const nextLapses = result === "incorrect" ? word.lapses + 1 : word.lapses;
        const nextSuccessStreak = result === "correct" ? word.successStreak + 1 : 0;
        const nextTags =
          result === "incorrect" && nextLapses >= 2
            ? uniqueList([...word.tags, "repair"])
            : nextSuccessStreak >= 2
              ? word.tags.filter((tag) => tag !== "repair")
              : word.tags;

        return {
          ...word,
          status: result === "incorrect" && nextLapses >= 2 ? "Learning" : advanceStatus(word.status, rating),
          dueAt: nextDueForRating(rating, nextLapses),
          lastReviewedAt: now,
          successStreak: nextSuccessStreak,
          lapses: nextLapses,
          tags: nextTags
        };
      })
    );
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
    const meaning = addWordForm.meaning.trim();
    const normalizedFrench = normalizeTerm(french);

    if (!french || !meaning) {
      setAddWordError("Add the French word and confirm the meaning before saving.");
      return;
    }

    const duplicate = vocabulary.find((word) => normalizeTerm(word.french) === normalizedFrench);
    if (duplicate) {
      setAddWordError(`"${duplicate.french}" already exists in your vocabulary database.`);
      setQuery(duplicate.french);
      return;
    }

    const suggestion = createSuggestedSetup(addWordForm);
    const now = new Date().toISOString();
    const newWord: VocabularyItem = {
      id: `${slugifyTerm(french)}-${Date.now().toString(36)}`,
      french,
      meaning,
      category: "General Vocabulary",
      level: addWordForm.level,
      partOfSpeech: addWordForm.partOfSpeech.trim() || suggestion.partOfSpeech,
      example: addWordForm.example.trim() || suggestion.example,
      translation: addWordForm.translation.trim() || suggestion.translation,
      structures: splitList(addWordForm.structures || suggestion.structures),
      synonymLadder: splitList(addWordForm.synonymLadder || suggestion.synonymLadder),
      wordFamily: splitList(addWordForm.wordFamily || suggestion.wordFamily),
      tcfPriority: addWordForm.tcfPriority,
      status: "New",
      dateAdded: now,
      source: addWordForm.source.trim() || suggestion.source,
      tags: splitList(addWordForm.tags || suggestion.tags),
      meaningConfirmed: true,
      dueAt: now,
      successStreak: 0,
      lapses: 0
    };

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
            onStartReview={startReview}
            onAddWord={openAddWord}
            onOpenVocabulary={() => setView("vocabulary")}
            onOpenAnalytics={() => setView("analytics")}
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
            sessionStats={sessionStats}
            streak={analytics.streak}
            word={activeReviewWord}
            onAddWord={openAddWord}
            onOpenAnalytics={() => setView("analytics")}
            onResetReview={resetReviewSession}
            onRate={reviewWord}
          />
        )}

        {view === "analytics" && <AnalyticsView vocabulary={vocabulary} attempts={attempts} dueWords={dueWords} analytics={analytics} />}
      </main>
    </div>
  );
}

function NavButton({ active, icon, label, onClick }: { active: boolean; icon: React.ReactNode; label: string; onClick: () => void }) {
  return (
    <button className={`nav-button ${active ? "active" : ""}`} onClick={onClick} title={label}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PlanStep({
  action,
  disabled = false,
  done,
  label,
  meta,
  onAction
}: {
  action: string;
  disabled?: boolean;
  done: boolean;
  label: string;
  meta: string;
  onAction: () => void;
}) {
  return (
    <div className={`plan-step ${done ? "done" : ""}`}>
      <div className="plan-status">{done ? <CheckCircle2 size={18} /> : <Clock3 size={18} />}</div>
      <div>
        <strong>{label}</strong>
        <span>{meta}</span>
      </div>
      <button className={done ? "secondary-action" : "primary-action"} disabled={disabled} onClick={onAction}>
        {action}
      </button>
    </div>
  );
}

function wordQuality(word: VocabularyItem) {
  if (!word.meaningConfirmed) return { label: "Needs confirmation", tone: "danger" };
  if (!word.example || !word.translation || word.structures.length === 0) return { label: "Needs setup", tone: "warning" };
  return { label: "Ready", tone: "success" };
}

function ReflectionCard({
  analytics,
  dueWords,
  mastered
}: {
  analytics: ReturnType<typeof getAnalyticsShape>;
  dueWords: VocabularyItem[];
  mastered: number;
}) {
  const totalTcf = Math.max(analytics.tcf.total, 1);
  const readiness = Math.round((analytics.tcf.mastered / totalTcf) * 100);
  const themes = [
    analytics.levelCounts[0]?.label ?? "B2",
    analytics.weak[0]?.level ?? "Active recall",
    analytics.statusCounts[0]?.status ?? "New"
  ];

  return (
    <section className="reflection-card">
      <div className="reflection-copy">
        <span className="eyebrow">Weekly reflection</span>
        <h2>Your vocabulary is starting to show patterns.</h2>
        <p>
          You are building range through {themes[0].toLowerCase()} while {analytics.weak[0]?.french ?? "new expressions"} still needs a slower pass.
          Keep today small: review {Math.min(dueWords.length, analytics.streak.dailyGoal)} cards, then capture one useful phrase from your notes.
        </p>
        <div className="theme-row">
          {themes.map((theme) => (
            <span key={theme}>{theme}</span>
          ))}
        </div>
      </div>
      <div className="reflection-orbit" aria-label="Progress summary">
        <div>
          <strong>{readiness}%</strong>
          <span>TCF readiness</span>
        </div>
        <div>
          <strong>{mastered}</strong>
          <span>active words</span>
        </div>
        <div>
          <strong>{analytics.streak.current}</strong>
          <span>day streak</span>
        </div>
      </div>
    </section>
  );
}

function HomeView({
  vocabulary,
  attempts,
  dueWords,
  analytics,
  onStartReview,
  onAddWord,
  onOpenVocabulary,
  onOpenAnalytics
}: {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  dueWords: VocabularyItem[];
  analytics: ReturnType<typeof getAnalyticsShape>;
  onStartReview: () => void;
  onAddWord: () => void;
  onOpenVocabulary: () => void;
  onOpenAnalytics: () => void;
}) {
  const status = learnerStatus(vocabulary, attempts);
  const mastered = vocabulary.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const recommended = dueWords.length > 0 ? dueWords[0] : analytics.weak[0] ?? vocabulary[0];

  return (
    <section className="view-stack">
      <div className="hero-band">
        <div>
          <span className="eyebrow">Bonjour Tim</span>
          <h1>{status}</h1>
          <p>
            {dueWords.length > 0
              ? `You have ${dueWords.length} words ready for review. Start with ${recommended?.french ?? "your queue"} and keep the streak alive.`
              : "Your queue is clear. This is a good moment to strengthen weak words or add new vocabulary."}
          </p>
        </div>
        <div className="hero-actions">
          {dueWords.length > 0 ? (
            <button className="primary-action" onClick={onStartReview}>
              <Play size={18} />
              Start review
            </button>
          ) : (
            <button className="primary-action" onClick={onAddWord}>
              <Plus size={18} />
              Add word
            </button>
          )}
          {dueWords.length > 0 ? (
            <button className="secondary-action" onClick={onAddWord}>
              <Plus size={18} />
              Capture vocab
            </button>
          ) : (
            <button className="secondary-action" onClick={onOpenAnalytics}>
              <LineChart size={18} />
              Analytics
            </button>
          )}
          {dueWords.length > 0 && (
            <>
              <button className="icon-action" onClick={onOpenVocabulary} title="Open vocabulary">
                <BookOpen size={18} />
              </button>
              <button className="icon-action" onClick={onOpenAnalytics} title="Open analytics">
                <LineChart size={18} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="metric-grid">
        <Metric icon={<Database />} label="Total words" value={vocabulary.length.toString()} detail={`${analytics.importedTotal} in source database`} />
        <Metric icon={<Clock3 />} label="Due today" value={dueWords.length.toString()} detail={`${Math.max(4, dueWords.length * 2)} min estimated`} />
        <Metric icon={<CheckCircle2 />} label="Active or mastered" value={mastered.toString()} detail={`${Math.round((mastered / vocabulary.length) * 100)}% of current seed`} />
        <Metric
          icon={<Flame />}
          label="Current streak"
          value={`${analytics.streak.current} days`}
          detail={analytics.streak.maintainedToday ? `Maintained today / longest ${analytics.streak.longest}` : `${analytics.streak.reviewsNeeded} reviews to maintain`}
        />
      </div>

      <ReflectionCard analytics={analytics} dueWords={dueWords} mastered={mastered} />

      <Panel title="Today Plan">
        <div className="plan-list">
          <PlanStep
            done={dueWords.length === 0}
            label="Review due vocabulary"
            meta={dueWords.length === 0 ? "Queue clear" : `${dueWords.length} due now`}
            action={dueWords.length === 0 ? "Clear" : "Start"}
            disabled={dueWords.length === 0}
            onAction={onStartReview}
          />
          <PlanStep
            done={analytics.streak.maintainedToday}
            label="Maintain study streak"
            meta={analytics.streak.maintainedToday ? "Daily goal met" : `${analytics.streak.reviewsNeeded} reviews remaining`}
            action="Review"
            onAction={onStartReview}
          />
          <PlanStep
            done={false}
            label="Capture new vocabulary"
            meta="Add from notes, textbook, or class"
            action="Add word"
            onAction={onAddWord}
          />
          <PlanStep
            done={analytics.weak.length === 0}
            label="Resolve weak area"
            meta={analytics.weak[0] ? `${analytics.weak[0].french} needs attention` : "No weak words flagged"}
            action="Inspect"
            onAction={onOpenAnalytics}
          />
        </div>
      </Panel>

      <div className="two-column">
        <Panel title="Mastery Status" action="View analytics" onAction={onOpenAnalytics}>
          <StatusBars rows={analytics.statusCounts.map((row) => ({ label: row.status, count: row.count }))} total={vocabulary.length} />
        </Panel>

        <Panel title="Weak Areas" action="Practice" onAction={onStartReview}>
          <div className="word-stack">
            {analytics.weak.slice(0, 4).map((word) => (
              <div className="word-row" key={word.id}>
                <div>
                  <strong>{word.french}</strong>
                  <span>{word.meaning}</span>
                </div>
                <span className="pill danger">{word.lapses} lapses</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <section className="notes-panel">
        <div>
          <span className="eyebrow">Notes to self</span>
          <ul>
            <li>Use {analytics.weak[0]?.french ?? "one weak word"} in a full opinion sentence.</li>
            <li>Review {analytics.streak.reviewsNeeded === 0 ? "one stretch card" : `${analytics.streak.reviewsNeeded} more cards`} before ending today.</li>
            <li>Tag the next batch by source so growth stays traceable.</li>
          </ul>
        </div>
        <div>
          <span className="eyebrow">Continuous threads</span>
          <ul>
            <li>{analytics.levelCounts[0]?.label ?? "B2"} words are becoming your strongest lane.</li>
            <li>{analytics.weak[0]?.level ?? "B2"} recall still needs retrieval practice.</li>
          </ul>
        </div>
      </section>
    </section>
  );
}

function VocabularyView({
  addVocabularyWord,
  addWordError,
  addWordForm,
  applySuggestedSetup,
  editingId,
  filteredVocabulary,
  levelFilter,
  levels,
  query,
  setEditingId,
  setAddWordForm,
  setLevelFilter,
  setShowAddWord,
  setQuery,
  showAddWord,
  updateWord
}: {
  addVocabularyWord: () => void;
  addWordError: string;
  addWordForm: AddWordForm;
  applySuggestedSetup: () => void;
  editingId: string | null;
  filteredVocabulary: VocabularyItem[];
  levelFilter: "All" | CefrLevel;
  levels: ("All" | CefrLevel)[];
  query: string;
  setEditingId: (value: string | null) => void;
  setAddWordForm: React.Dispatch<React.SetStateAction<AddWordForm>>;
  setLevelFilter: (value: "All" | CefrLevel) => void;
  setShowAddWord: (value: boolean) => void;
  setQuery: (value: string) => void;
  showAddWord: boolean;
  updateWord: (id: string, patch: Partial<VocabularyItem>) => void;
}) {
  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Knowledge base</span>
          <h1>Vocabulary</h1>
        </div>
        <button className="primary-action" onClick={() => setShowAddWord(true)}>
          <Plus size={18} />
          Add word
        </button>
      </div>

      {showAddWord && (
        <AddWordPanel
          error={addWordError}
          form={addWordForm}
          onApplySuggestedSetup={applySuggestedSetup}
          onCancel={() => setShowAddWord(false)}
          onChange={setAddWordForm}
          onSave={addVocabularyWord}
        />
      )}

      <div className="toolbar">
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search words, levels, sources" />
        </label>
        <label className="select-box">
          <ListFilter size={18} />
          <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value as "All" | CefrLevel)}>
            {levels.map((level) => (
              <option key={level}>{level === "All" ? "All levels" : level}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="result-strip">
        <span>{filteredVocabulary.length} shown</span>
        <strong>{levelFilter === "All" ? "All levels" : levelFilter}</strong>
      </div>

      <div className="vocab-list">
        {filteredVocabulary.map((word) => {
          const isEditing = editingId === word.id;
          const quality = wordQuality(word);
          return (
            <article className="vocab-card" key={word.id}>
              <div className="vocab-main">
                <div>
                  <span className="eyebrow">{word.level} / {word.partOfSpeech}</span>
                  <h3>{word.french}</h3>
                  <p>{word.meaning}</p>
                  <small>{word.example}</small>
                </div>
                <button className="icon-action compact" onClick={() => setEditingId(isEditing ? null : word.id)} title="Edit word">
                  <Pencil size={16} />
                </button>
              </div>
              <div className="tag-row">
                <span className="pill">{word.status}</span>
                <span className="pill">{word.level}</span>
                <span className={`pill ${quality.tone}`}>{quality.label}</span>
                {isRepairWord(word) && <span className="pill danger">Repair queue</span>}
                <span className="pill">{word.source}</span>
              </div>
              <LearningTools word={word} compact />
              {isEditing && (
                <div className="edit-grid">
                  <label>
                    Meaning
                    <input value={word.meaning} onChange={(event) => updateWord(word.id, { meaning: event.target.value })} />
                  </label>
                  <label>
                    Level
                    <select value={word.level} onChange={(event) => updateWord(word.id, { level: event.target.value as CefrLevel })}>
                      {levelOptions.map((level) => <option key={level}>{level}</option>)}
                    </select>
                  </label>
                  <label>
                    Status
                    <select value={word.status} onChange={(event) => updateWord(word.id, { status: event.target.value as VocabularyStatus })}>
                      {statusOptions.map((status) => <option key={status}>{status}</option>)}
                    </select>
                  </label>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AddWordPanel({
  error,
  form,
  onApplySuggestedSetup,
  onCancel,
  onChange,
  onSave
}: {
  error: string;
  form: AddWordForm;
  onApplySuggestedSetup: () => void;
  onCancel: () => void;
  onChange: React.Dispatch<React.SetStateAction<AddWordForm>>;
  onSave: () => void;
}) {
  const canSave = form.french.trim().length > 0 && form.meaning.trim().length > 0;
  const setupChecks = [
    { label: "Term captured", done: form.french.trim().length > 0 },
    { label: "Meaning confirmed", done: form.meaning.trim().length > 0 },
    { label: "Example prepared", done: form.example.trim().length > 0 && form.translation.trim().length > 0 },
    { label: "Source tracked", done: form.source.trim().length > 0 }
  ];
  const update = <K extends keyof AddWordForm>(key: K, value: AddWordForm[K]) => {
    onChange((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="add-word-panel" aria-label="Add vocabulary word">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Confirm setup</span>
          <h2>Add a new word</h2>
        </div>
        <button onClick={onApplySuggestedSetup}>
          <Sparkles size={16} />
          Suggest setup
        </button>
      </div>

      <div className="setup-checklist">
        {setupChecks.map((check) => (
          <span className={check.done ? "check done" : "check"} key={check.label}>
            <CheckCircle2 size={14} />
            {check.label}
          </span>
        ))}
      </div>

      <div className="add-word-grid">
        <label className="field wide">
          French word or expression
          <input value={form.french} onChange={(event) => update("french", event.target.value)} placeholder="ex. remettre en cause" />
        </label>
        <label className="field wide">
          Confirmed meaning
          <input value={form.meaning} onChange={(event) => update("meaning", event.target.value)} placeholder="ex. to call into question" />
        </label>
        <label className="field">
          Level
          <select value={form.level} onChange={(event) => update("level", event.target.value as CefrLevel)}>
            {levelOptions.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Part of speech
          <input value={form.partOfSpeech} onChange={(event) => update("partOfSpeech", event.target.value)} />
        </label>
        <label className="field">
          TCF priority
          <select value={form.tcfPriority} onChange={(event) => update("tcfPriority", event.target.value as Priority)}>
            {priorityOptions.map((priority) => (
              <option key={priority}>{priority}</option>
            ))}
          </select>
        </label>
        <label className="field wide">
          Example sentence
          <input value={form.example} onChange={(event) => update("example", event.target.value)} placeholder="French example sentence" />
        </label>
        <label className="field wide">
          English translation
          <input value={form.translation} onChange={(event) => update("translation", event.target.value)} placeholder="Example translation" />
        </label>
        <label className="field">
          Structures
          <input value={form.structures} onChange={(event) => update("structures", event.target.value)} placeholder="comma separated" />
        </label>
        <label className="field">
          Synonyms
          <input value={form.synonymLadder} onChange={(event) => update("synonymLadder", event.target.value)} placeholder="encourager, promouvoir..." />
        </label>
        <label className="field">
          Word family
          <input value={form.wordFamily} onChange={(event) => update("wordFamily", event.target.value)} placeholder="noun, verb, adjective..." />
        </label>
        <label className="field">
          Tags
          <input value={form.tags} onChange={(event) => update("tags", event.target.value)} placeholder="comma separated" />
        </label>
        <label className="field wide">
          Source
          <input value={form.source} onChange={(event) => update("source", event.target.value)} placeholder="Manual entry, textbook, notes..." />
        </label>
      </div>

      <div className="confirmation-strip">
        <CheckCircle2 size={18} />
        <span>New words are saved as New, due immediately, source-tracked, and marked as meaning confirmed.</span>
      </div>

      {error && <div className="form-error">{error}</div>}

      <div className="form-actions">
        <button className="secondary-action" onClick={onCancel}>Cancel</button>
        <button className="primary-action" disabled={!canSave} onClick={onSave}>
          <Save size={18} />
          Save word
        </button>
      </div>
    </section>
  );
}

function LearningTools({ compact = false, word }: { compact?: boolean; word: VocabularyItem }) {
  const ladder = getSynonymLadder(word);
  const family = getWordFamily(word);
  const patterns = getUsagePatterns(word);

  if (ladder.length === 0 && family.length === 0 && patterns.length === 0 && !isRepairWord(word)) return null;

  return (
    <span className={`learning-tools ${compact ? "compact" : ""}`}>
      {ladder.length > 0 && (
        <span className="learning-tool-row">
          <span className="tool-label">Synonyms</span>
          <span className="tool-content ladder-row">
            {ladder.map((item, index) => (
              <span className="ladder-chip" key={`${word.id}-ladder-${item}`}>
                {index > 0 && <ChevronRight size={13} />}
                {item}
              </span>
            ))}
          </span>
        </span>
      )}

      {family.length > 0 && (
        <span className="learning-tool-row">
          <span className="tool-label">Family</span>
          <span className="tool-content family-row">
            {family.map((item) => (
              <span className="family-chip" key={`${word.id}-family-${item}`}>{item}</span>
            ))}
          </span>
        </span>
      )}

      {patterns.length > 0 && (
        <span className="learning-tool-row">
          <span className="tool-label">Pattern</span>
          <span className="tool-content pattern-row">
            {patterns.map((item) => (
              <span className="pattern-chip" key={`${word.id}-pattern-${item}`}>{item}</span>
            ))}
          </span>
        </span>
      )}

      {isRepairWord(word) && (
        <span className="repair-note">
          <strong>Repair review</strong>
          <span>{word.repairPrompt ?? "Use this word in one TCF-style sentence, then repeat it with a synonym."}</span>
        </span>
      )}
    </span>
  );
}

function ReviewView({
  dueWords,
  sessionStats,
  streak,
  word,
  onAddWord,
  onOpenAnalytics,
  onResetReview,
  onRate
}: {
  dueWords: VocabularyItem[];
  sessionStats: SessionStats;
  streak: ReturnType<typeof streakSummary>;
  word?: VocabularyItem;
  onAddWord: () => void;
  onOpenAnalytics: () => void;
  onResetReview: () => void;
  onRate: (rating: ReviewRating) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setRevealed(false), [word?.id]);

  if (!word) {
    return (
      <section className="empty-state session-complete">
        <CheckCircle2 size={28} />
        <h1>{sessionStats.reviewed > 0 ? "Review complete" : "Queue clear"}</h1>
        <p>
          {sessionStats.reviewed > 0
            ? `${sessionStats.correct} of ${sessionStats.reviewed} cards moved forward. ${streak.reviewsNeeded} reviews left for today's streak goal.`
            : "No vocabulary is due right now. Add new words or inspect weak areas."}
        </p>
        <div className="completion-actions">
          {sessionStats.reviewed > 0 && (
            <button className="primary-action" onClick={onResetReview}>
              <RotateCcw size={18} />
              Reset session
            </button>
          )}
          <button className="secondary-action" onClick={onOpenAnalytics}>
            <LineChart size={18} />
            View analytics
          </button>
          <button className="secondary-action" onClick={onAddWord}>
            <Plus size={18} />
            Add word
          </button>
        </div>
      </section>
    );
  }

  const sessionTotal = sessionStats.reviewed + dueWords.length;
  const progress = sessionTotal === 0 ? 0 : Math.round((sessionStats.reviewed / sessionTotal) * 100);

  return (
    <section className="review-layout">
      <div className="session-header">
        <div>
          <span className="eyebrow">Review session</span>
          <strong>{sessionStats.reviewed} reviewed / {dueWords.length} remaining</strong>
        </div>
        <div className="session-progress">
          <span>{progress}%</span>
          <div className="bar-track">
            <div style={{ width: `${Math.max(4, progress)}%` }} />
          </div>
        </div>
      </div>

      <div
        className={`flip-card ${revealed ? "flipped" : ""}`}
        onClick={() => setRevealed((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setRevealed((value) => !value);
          }
        }}
        role="button"
        tabIndex={0}
        aria-pressed={revealed}
      >
        <div className="flip-card-inner">
          <div
            className="flip-face flip-front"
            style={{
              opacity: revealed ? 0 : 1,
              transform: revealed ? "rotateY(-180deg)" : "rotateY(0deg)"
            }}
          >
            <span className="eyebrow">{dueWords.length} due / Flashcards</span>
            <span className="card-word">{word.french}</span>
            <span className="card-example">{word.example}</span>
            <span className="flip-hint">Click card to reveal answer</span>
          </div>
          <div
            className="flip-face flip-back"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "rotateY(0deg)" : "rotateY(180deg)"
            }}
          >
            <span className="eyebrow">Answer</span>
            <span className="card-word answer-word">{word.meaning}</span>
            <span className="card-example">{word.translation}</span>
            <span className="tag-row">
              {word.structures.map((structure) => <span className="pill" key={structure}>{structure}</span>)}
            </span>
            <LearningTools word={word} />
            <span className="flip-hint">Click card to see prompt again</span>
          </div>
        </div>
      </div>

      <div className="rating-grid">
        {(["Again", "Hard", "Good", "Easy"] as ReviewRating[]).map((rating) => (
          <button className={`rating-button ${rating.toLowerCase()}`} key={rating} onClick={() => onRate(rating)}>
            <strong>{rating}</strong>
            <span>{rating === "Again" ? (word.lapses >= 1 ? "5 min" : "10 min") : rating === "Hard" && word.lapses >= 1 ? "30 min" : `${scheduleByRating[rating]} days`}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

function AnalyticsView({
  vocabulary,
  attempts,
  dueWords,
  analytics
}: {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  dueWords: VocabularyItem[];
  analytics: ReturnType<typeof getAnalyticsShape>;
}) {
  const readiness = analytics.tcf.total === 0 ? 0 : Math.round((analytics.tcf.mastered / analytics.tcf.total) * 100);
  const nextFocus = analytics.weak[0];
  const highPriorityRemaining = Math.max(0, analytics.tcf.total - analytics.tcf.mastered);

  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">TCF analytics</span>
          <h1>Readiness dashboard</h1>
        </div>
      </div>

      <div className="metric-grid">
        <Metric icon={<Target />} label="TCF readiness" value={`${readiness}%`} detail={`${analytics.tcf.mastered}/${analytics.tcf.total} high priority active`} />
        <Metric icon={<BarChart3 />} label="Review accuracy" value={`${analytics.accuracy}%`} detail={`${attempts.length} total attempts`} />
        <Metric icon={<Flame />} label="Streak" value={`${analytics.streak.current} days`} detail={`${analytics.streak.reviewsToday}/${analytics.streak.dailyGoal} reviews today`} />
        <Metric icon={<Clock3 />} label="Due today" value={dueWords.length.toString()} detail={`${analytics.streak.reviewsNeeded} reviews to maintain`} />
      </div>

      <div className="analytics-grid">
        <section className="readiness-card">
          <div>
            <span className="eyebrow">Next best action</span>
            <h2>{nextFocus ? `Repair "${nextFocus.french}"` : "Keep the streak alive"}</h2>
            <p>
              {nextFocus
                ? `This word is hurting recall most. Review it, then use it in one TCF-style opinion sentence.`
                : `No weak words are flagged. Complete ${analytics.streak.dailyGoal} reviews to protect the habit.`}
            </p>
          </div>
          <div className="readiness-score">
            <strong>{highPriorityRemaining}</strong>
            <span>high-priority words left</span>
          </div>
        </section>

        <Panel title="Reviews Last 7 Days">
          <div className="mini-chart compact-chart">
            {analytics.reviewVolume.map((day) => (
              <div className="bar-column" key={day.label}>
                <div style={{ height: `${Math.max(8, day.count * 18)}px` }} />
                <span>{day.label}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="analytics-grid secondary">
        <Panel title="Repair Queue">
          <div className="focus-list">
            {analytics.weak.length === 0 ? (
              <div className="word-row">
                <div>
                  <strong>No repair words flagged</strong>
                  <span>Missed cards will appear here after repeated lapses.</span>
                </div>
              </div>
            ) : (
              analytics.weak.slice(0, 4).map((word) => (
                <div className="word-row" key={word.id}>
                  <div>
                    <strong>{word.french}</strong>
                    <span>{word.meaning}</span>
                  </div>
                  <span className="pill danger">{word.lapses} lapses</span>
                </div>
              ))
            )}
          </div>
        </Panel>

        <Panel title="Coverage">
          <div className="coverage-stack">
            <StatusBars rows={analytics.levelCounts} total={vocabulary.length} />
            <div className="coverage-note">
              <span className="eyebrow">Largest level</span>
              <strong>{analytics.levelCounts[0]?.label ?? "No level yet"}</strong>
              <p>{analytics.levelCounts[0]?.count ?? 0} words in your strongest level band.</p>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}

function Metric({ icon, label, value, detail }: { icon: React.ReactNode; label: string; value: string; detail: string }) {
  return (
    <article className="metric-card">
      <div className="metric-icon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

function Panel({ title, action, onAction, children }: { title: string; action?: string; onAction?: () => void; children: React.ReactNode }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        {action && (
          <button onClick={onAction}>
            {action}
            <ChevronRight size={16} />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}

function StatusBars({ rows, total }: { rows: { label: string; count: number }[]; total: number }) {
  return (
    <div className="status-bars">
      {rows.map((row) => (
        <div className="status-row" key={row.label}>
          <div className="status-label">
            <span>{row.label}</span>
            <strong>{row.count}</strong>
          </div>
          <div className="bar-track">
            <div style={{ width: `${Math.max(4, (row.count / total) * 100)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function getAnalyticsShape() {
  return {
    statusCounts: [] as { status: VocabularyStatus; count: number }[],
    levelCounts: [] as { label: string; count: number }[],
    sourceCounts: [] as { label: string; count: number }[],
    weak: [] as (VocabularyItem & { difficultyScore: number })[],
    tcf: { total: 0, mastered: 0, accuracy: 0 },
    streak: { current: 0, longest: 0, dailyGoal: 5, reviewsToday: 0, reviewsNeeded: 5, maintainedToday: false },
    accuracy: 0,
    reviewVolume: [] as { label: string; count: number }[],
    importedTotal: 0
  };
}

export default App;
