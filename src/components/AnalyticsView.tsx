import { BarChart3, Clock3, Flame, Target } from "lucide-react";
import type { AnalyticsSummary } from "../lib/analyticsSummary";
import type { ReviewAttempt, VocabularyItem } from "../lib/types";
import { Metric, Panel, StatusBars } from "./common";

export function AnalyticsView({
  vocabulary,
  attempts,
  dueWords,
  analytics
}: {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  dueWords: VocabularyItem[];
  analytics: AnalyticsSummary;
}) {
  const readiness = analytics.tcf.total === 0 ? 0 : Math.round((analytics.tcf.mastered / analytics.tcf.total) * 100);
  const nextFocus = analytics.weak[0];
  const highPriorityRemaining = Math.max(0, analytics.tcf.total - analytics.tcf.mastered);
  const maxReviewVolume = Math.max(1, ...analytics.reviewVolume.map((day) => day.count));

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
                ? "This word is hurting recall most. Review it, then use it in one TCF-style opinion sentence."
                : `No repair words are flagged. Complete ${analytics.streak.dailyGoal} reviews to protect the habit.`}
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
                <div style={{ height: `${day.count === 0 ? 8 : Math.max(10, Math.round((day.count / maxReviewVolume) * 100))}%` }} />
                <span>{day.label}</span>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="analytics-grid secondary">
        <Panel title="Mastery Status">
          <StatusBars rows={analytics.statusCounts.map((row) => ({ label: row.status, count: row.count }))} total={vocabulary.length} />
        </Panel>

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
