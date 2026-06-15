import { Database, Flame, Play, Plus, Target } from "lucide-react";
import { learnerStatus } from "../lib/analyticsSummary";
import type { AnalyticsSummary } from "../lib/analyticsSummary";
import type { ReviewAttempt, VocabularyItem } from "../lib/types";

function ReflectionCard({ analytics, dueWords }: { analytics: AnalyticsSummary; dueWords: VocabularyItem[] }) {
  const focus = analytics.weak[0]?.french ?? analytics.levelCounts[0]?.label ?? "today's vocabulary";
  const reviewTarget = Math.min(dueWords.length, analytics.streak.dailyGoal);

  return (
    <section className="reflection-card">
      <div className="reflection-copy">
        <span className="eyebrow">Weekly reflection</span>
        <h2>Keep the next session small.</h2>
        <p>
          Review {reviewTarget} due cards, then use {focus} in one full TCF-style sentence.
        </p>
      </div>
    </section>
  );
}

export function HomeView({
  vocabulary,
  attempts,
  dueWords,
  analytics,
  onStartReview,
  onAddWord
}: {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  dueWords: VocabularyItem[];
  analytics: AnalyticsSummary;
  onStartReview: () => void;
  onAddWord: () => void;
}) {
  const status = learnerStatus(vocabulary, attempts);
  const recommended = dueWords.length > 0 ? dueWords[0] : analytics.weak[0] ?? vocabulary[0];
  const tcfRecallValue = analytics.tcf.attempts > 0 ? `${analytics.tcf.accuracy}%` : "-";
  const tcfRecallLabel = analytics.tcf.attempts > 0 ? "TCF recall" : "no TCF reviews yet";

  return (
    <section className="view-stack">
      <div className="hero-band">
        <div className="hero-copy">
          <span className="eyebrow">Bonjour Tim</span>
          <h1>{status}</h1>
          <p>
            {dueWords.length > 0
              ? `${dueWords.length} words are ready. Start with ${recommended?.french ?? "your queue"}.`
              : "Your queue is clear. Add a useful word or check your analytics."}
          </p>
        </div>
        <div className="hero-side">
          <div className="hero-card-stack" aria-label="Today summary">
            <div className="hero-mini-card primary">
              <span>{new Date().toLocaleDateString(undefined, { weekday: "long" })}</span>
              <strong>{dueWords.length}</strong>
              <small>reviews due</small>
            </div>
            <div className="hero-mini-card">
              <Database size={18} />
              <strong>{vocabulary.length}</strong>
              <small>total words</small>
            </div>
            <div className="hero-mini-card">
              <Flame size={18} />
              <strong>{analytics.streak.current}</strong>
              <small>day streak</small>
            </div>
            <div className="hero-mini-card">
              <Target size={18} />
              <strong>{tcfRecallValue}</strong>
              <small>{tcfRecallLabel}</small>
            </div>
          </div>
          <div className="hero-actions">
            <button className="primary-action" onClick={onStartReview}>
              <Play size={18} />
              Start practicing
            </button>
            <button className="secondary-action" onClick={onAddWord}>
              <Plus size={18} />
              Capture Vocab
            </button>
          </div>
        </div>
      </div>

      <ReflectionCard analytics={analytics} dueWords={dueWords} />
    </section>
  );
}
