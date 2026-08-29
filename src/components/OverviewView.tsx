import { ArrowRight, Flame } from "lucide-react";
import type { AnalyticsSummary } from "../lib/analyticsSummary";
import type { VocabularyItem } from "../lib/types";

export function OverviewView({
  vocabulary,
  dueWords,
  analytics,
  onStartReview
}: {
  vocabulary: VocabularyItem[];
  dueWords: VocabularyItem[];
  analytics: AnalyticsSummary;
  onStartReview: () => void;
}) {
  const due = dueWords.length;
  const streak = analytics.streak.current;
  const mastered = analytics.statusCounts
    .filter((entry) => entry.status === "Active" || entry.status === "Mastered")
    .reduce((sum, entry) => sum + entry.count, 0);
  const recommended = dueWords[0]?.french ?? analytics.weak[0]?.french;

  const subline =
    due > 0
      ? recommended
        ? `start with ${recommended.toLowerCase()}`
        : "your queue is ready"
      : "queue clear — add a word or revisit weak spots";

  return (
    <article className="hero-card">
      <div className="hero-badge">
        <Flame size={14} />
        <span>{streak} day streak</span>
      </div>

      <p className="hero-greeting">Bonjour</p>

      <div className="hero-figure">
        <strong className="hero-due">{due}</strong>
        <span className="hero-due-label">{due === 1 ? "word due" : "words due"}</span>
      </div>

      <button className="hero-cta" onClick={onStartReview} disabled={due === 0}>
        {due > 0 ? "review" : "all caught up"}
        {due > 0 && <ArrowRight size={18} />}
      </button>

      <div className="hero-meta">
        <span>{subline}</span>
        <span className="hero-meta-stats">
          {vocabulary.length} words · {mastered} mastered
        </span>
      </div>
    </article>
  );
}
