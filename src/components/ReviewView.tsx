import { useEffect, useState } from "react";
import { CheckCircle2, Play, RotateCcw } from "lucide-react";
import { getPracticeCount } from "../lib/practice";
import { ratingDelayLabel, reviewRatings } from "../lib/review";
import type { SessionStats } from "../lib/review";
import type { PracticeSize, ReviewRating, VocabularyItem } from "../lib/types";
import type { streakSummary } from "../lib/analytics";
import { LearningTools } from "./LearningTools";
import { PracticeSizeControl, PronunciationButton } from "./common";

export function ReviewView({
  dueWords,
  practiceSize,
  remainingSessionWords,
  sessionStats,
  sessionTargetCount,
  streak,
  word,
  onPracticeSizeChange,
  onResetReview,
  onStartReview,
  onRate
}: {
  dueWords: VocabularyItem[];
  practiceSize: PracticeSize;
  remainingSessionWords: VocabularyItem[];
  sessionStats: SessionStats;
  sessionTargetCount: number;
  streak: ReturnType<typeof streakSummary>;
  word?: VocabularyItem;
  onPracticeSizeChange: (value: PracticeSize) => void;
  onResetReview: () => void;
  onStartReview: () => void;
  onRate: (rating: ReviewRating) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setRevealed(false), [word?.id]);

  if (!word) {
    const nextSessionCount = getPracticeCount(practiceSize, dueWords.length);
    const hasRemainingDueWords = dueWords.length > 0;
    const isSessionComplete = sessionStats.reviewed > 0;
    const accuracy = sessionStats.reviewed === 0 ? 0 : Math.round((sessionStats.correct / sessionStats.reviewed) * 100);
    const missedCount = sessionStats.reviewed - sessionStats.correct;
    const focusReviews = sessionStats.reviews.filter((review) => review.result === "incorrect").slice(0, 3);
    const nextDueWords = dueWords.slice(0, 3).map((dueWord) => ({
      wordId: dueWord.id,
      french: dueWord.french,
      meaning: dueWord.meaning,
      rating: "Good" as ReviewRating,
      result: "correct" as const
    }));
    const focusWords = focusReviews.length > 0 ? focusReviews : nextDueWords;

    return (
      <section className="empty-state session-complete">
        <CheckCircle2 size={28} />
        <h1>{isSessionComplete ? "Review complete" : hasRemainingDueWords ? "Ready to review" : "Queue clear"}</h1>
        <p>
          {isSessionComplete
            ? `${sessionStats.correct} of ${sessionStats.reviewed} cards moved forward. ${hasRemainingDueWords ? `${dueWords.length} due words remain.` : `${streak.reviewsNeeded} reviews left for today's streak goal.`}`
            : hasRemainingDueWords
              ? `${dueWords.length} due words are waiting.`
              : "No vocabulary is due right now. Add new words or check analytics."}
        </p>
        {isSessionComplete && (
          <div className="session-recap" aria-label="Session recap">
            <div className="session-recap-metrics">
              <span>
                <strong>{accuracy}%</strong>
                <small>accuracy</small>
              </span>
              <span>
                <strong>{sessionStats.correct}</strong>
                <small>moved forward</small>
              </span>
              <span>
                <strong>{missedCount}</strong>
                <small>needs work</small>
              </span>
            </div>
            <div className="session-focus">
              <span className="eyebrow">{focusReviews.length > 0 ? "Keep working on" : "Next words"}</span>
              <div className="session-focus-list">
                {focusWords.length > 0 ? (
                  focusWords.map((focusWord) => (
                    <span className="session-focus-word" key={`${focusWord.wordId}-${focusWord.rating}`}>
                      <strong>{focusWord.french}</strong>
                      <small>{focusWord.meaning}</small>
                      {focusReviews.length > 0 && <em>{focusWord.rating}</em>}
                    </span>
                  ))
                ) : (
                  <span className="session-focus-word">
                    <strong>No trouble words</strong>
                    <small>This session was clean.</small>
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
        {hasRemainingDueWords && (
          <PracticeSizeControl dueCount={dueWords.length} practiceSize={practiceSize} onChange={onPracticeSizeChange} />
        )}
        <div className="completion-actions">
          {hasRemainingDueWords && (
            <button className="primary-action" onClick={onStartReview}>
              <Play size={18} />
              Start {nextSessionCount}
            </button>
          )}
          {sessionStats.reviewed > 0 && (
            <button className="primary-action" onClick={onResetReview}>
              <RotateCcw size={18} />
              Reset session
            </button>
          )}
        </div>
      </section>
    );
  }

  const sessionTotal = Math.max(sessionTargetCount, sessionStats.reviewed + remainingSessionWords.length);
  const progress = sessionTotal === 0 ? 0 : Math.round((sessionStats.reviewed / sessionTotal) * 100);
  const nextPreview = remainingSessionWords[1];
  const laterPreview = remainingSessionWords[2];
  const remainingCount = remainingSessionWords.length;

  return (
    <section className="review-layout review-stage">
      <div className="session-header">
        <div>
          <span className="eyebrow">Review session</span>
          <strong>{sessionStats.reviewed} reviewed / {remainingCount} remaining</strong>
        </div>
        <div className="session-progress">
          <span>{progress}%</span>
          <div className="bar-track">
            <div style={{ width: `${Math.max(4, progress)}%` }} />
          </div>
        </div>
      </div>

      <div className="flashcard-scene">
        <div className="review-copy">
          <span className="eyebrow">Today's card</span>
          <h1>{revealed ? "Rate your recall." : "Say it first."}</h1>
          <p>{word.level} / {word.partOfSpeech} / {word.status}</p>
        </div>

        <div className="deck-shell">
          <span className="deck-layer layer-two" aria-hidden="true" key={laterPreview?.id ?? "later-preview"}>
            <span>{laterPreview?.level ?? word.level}</span>
            <strong>{laterPreview?.french ?? "Encore une carte"}</strong>
          </span>
          <span className="deck-layer layer-one" aria-hidden="true" key={nextPreview?.id ?? "next-preview"}>
            <span>{nextPreview?.level ?? word.level}</span>
            <strong>{nextPreview?.french ?? "Carte suivante"}</strong>
          </span>
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
                <span className="card-topline">
                  <span className="card-kicker">{remainingCount} in session / French prompt</span>
                  <PronunciationButton text={word.french} />
                </span>
                <span className="card-word">{word.french}</span>
                <span className="card-example">{word.example}</span>
                <span className="flip-hint">Tap to reveal answer</span>
              </div>
              <div
                className="flip-face flip-back"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "rotateY(0deg)" : "rotateY(180deg)"
                }}
              >
                <span className="card-topline">
                  <span className="card-kicker">Answer</span>
                  <PronunciationButton text={word.french} />
                </span>
                <span className="card-word answer-word">{word.meaning}</span>
                <span className="card-example">{word.translation}</span>
                <span className="tag-row">
                  {word.structures.map((structure) => <span className="pill" key={structure}>{structure}</span>)}
                </span>
                <LearningTools word={word} />
                <span className="flip-hint">Tap to see prompt again</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rating-grid">
        {reviewRatings.map((rating) => (
          <button className={`rating-button ${rating.toLowerCase()}`} key={rating} onClick={() => onRate(rating)}>
            <strong>{rating}</strong>
            <span>{ratingDelayLabel(rating, word.lapses)}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
