import type { AnalyticsSummary } from "../lib/analyticsSummary";
import type { ReviewAttempt, VocabularyItem, VocabularyStatus } from "../lib/types";

const statusClass: Record<VocabularyStatus, string> = {
  New: "new",
  Learning: "learning",
  Familiar: "familiar",
  Active: "active",
  Mastered: "mastered"
};

export function TrackView({
  vocabulary,
  attempts,
  analytics
}: {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  analytics: AnalyticsSummary;
}) {
  const total = vocabulary.length;
  const mastered = analytics.statusCounts
    .filter((entry) => entry.status === "Active" || entry.status === "Mastered")
    .reduce((sum, entry) => sum + entry.count, 0);
  const masteredPct = total === 0 ? 0 : Math.round((mastered / total) * 100);
  const maxVolume = Math.max(1, ...analytics.reviewVolume.map((day) => day.count));
  const hasActivity = attempts.length > 0;
  const focus = analytics.weak[0];

  const stats = [
    { value: `${total}`, label: "words", detail: "in your library" },
    { value: `${mastered}`, label: "mastered", detail: `${masteredPct}% of library` },
    { value: hasActivity ? `${analytics.accuracy}%` : "—", label: "accuracy", detail: `${attempts.length} reviews` },
    { value: `${analytics.streak.current}`, label: "day streak", detail: `best ${analytics.streak.longest}` }
  ];

  return (
    <article className="track-card">
      <div className="track-stats">
        {stats.map((stat) => (
          <div className="track-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span className="track-stat-label">{stat.label}</span>
            <span className="track-stat-detail">{stat.detail}</span>
          </div>
        ))}
      </div>

      <section className="track-section">
        <span className="track-heading">mastery</span>
        <div className="mastery-bar">
          {analytics.statusCounts
            .filter((entry) => entry.count > 0)
            .map((entry) => (
              <span
                key={entry.status}
                className={`mastery-seg ${statusClass[entry.status]}`}
                style={{ flexGrow: entry.count }}
                title={`${entry.status}: ${entry.count}`}
              />
            ))}
        </div>
        <div className="mastery-legend">
          {analytics.statusCounts.map((entry) => (
            <span className="legend-item" key={entry.status}>
              <span className={`legend-dot ${statusClass[entry.status]}`} />
              {entry.status.toLowerCase()}
              <em>{entry.count}</em>
            </span>
          ))}
        </div>
      </section>

      <section className="track-section">
        <span className="track-heading">last 7 days</span>
        <div className="activity">
          {analytics.reviewVolume.map((day, index) => (
            <div className="activity-col" key={`${day.label}-${index}`}>
              <div className="activity-track">
                <div
                  className="activity-bar"
                  style={{ height: day.count === 0 ? "3px" : `${Math.max(10, Math.round((day.count / maxVolume) * 100))}%` }}
                />
              </div>
              <span className="activity-label">{day.label}</span>
            </div>
          ))}
        </div>
        <p className="track-focus">
          {hasActivity
            ? focus
              ? `focus next on ${focus.french.toLowerCase()} — ${focus.lapses} lapses`
              : "no trouble words flagged — keep it up"
            : "start a review to begin tracking your progress"}
        </p>
      </section>
    </article>
  );
}
