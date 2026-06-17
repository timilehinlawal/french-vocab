import { ArrowRight, Sparkles } from "lucide-react";
import { learnerStatus } from "../lib/analyticsSummary";
import type { AnalyticsSummary } from "../lib/analyticsSummary";
import type { ReviewAttempt, VocabularyItem } from "../lib/types";

const today = () =>
  new Date().toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" }).toLowerCase();

export function OverviewView({
  learnerName,
  vocabulary,
  attempts,
  dueWords,
  analytics,
  onStartReview
}: {
  learnerName: string;
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  dueWords: VocabularyItem[];
  analytics: AnalyticsSummary;
  onStartReview: () => void;
}) {
  const status = learnerStatus(vocabulary, attempts).toLowerCase();
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
        <Sparkles size={14} />
        <span>{today()}</span>
      </div>

      <p className="hero-greeting">bonjour, {learnerName.toLowerCase()}</p>

      <div className="hero-figure">
        <strong className="hero-due">{due}</strong>
        <span className="hero-due-label">{due === 1 ? "word due" : "words due"}</span>
      </div>

      <p className="hero-status">
        {status}
        <span className="hero-dot" aria-hidden="true">
          ·
        </span>
        {streak > 0 ? `${streak}-day streak` : "start a streak today"}
      </p>

      <button className="hero-cta" onClick={onStartReview} disabled={due === 0}>
        {due > 0 ? "start review" : "all caught up"}
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
