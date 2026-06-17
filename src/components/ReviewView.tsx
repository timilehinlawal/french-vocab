import { useEffect, useState } from "react";
import { ArrowRight, RotateCcw, Sparkles, X } from "lucide-react";
import { getPracticeCount } from "../lib/practice";
import { reviewRatings } from "../lib/review";
import type { SessionStats } from "../lib/review";
import type { PracticeSize, ReviewRating, VocabularyItem } from "../lib/types";
import { PronunciationButton } from "./common";

// Human-friendly recall ratings. `next` mirrors nextDueForRating() so the
// copy matches the real schedule the word will land on.
const ratingConfig: {
  rating: ReviewRating;
  label: string;
  tone: string;
  next: (word: VocabularyItem) => string;
}[] = [
  { rating: "Again", label: "hard", tone: "again", next: (word) => (word.lapses >= 1 ? "~5 min" : "~10 min") },
  { rating: "Hard", label: "shaky", tone: "hard", next: (word) => (word.lapses >= 1 ? "~30 min" : "1 day") },
  { rating: "Good", label: "good", tone: "good", next: () => "3 days" },
  { rating: "Easy", label: "easy", tone: "easy", next: () => "7 days" }
];

function SessionSize({
  dueCount,
  practiceSize,
  onChange
}: {
  dueCount: number;
  practiceSize: PracticeSize;
  onChange: (value: PracticeSize) => void;
}) {
  const presets = [10, 25, 50].filter((value) => value < dueCount);
  const options: { label: string; value: number }[] = [
    ...presets.map((value) => ({ label: `${value}`, value })),
    { label: "all", value: dueCount }
  ];
  const selected = getPracticeCount(practiceSize, dueCount);

  return (
    <div className="size-control" role="group" aria-label="Session size">
      <span className="size-label">cards</span>
      <div className="size-options">
        {options.map((option) => (
          <button
            key={option.label}
            className={`size-pill${selected === option.value ? " active" : ""}`}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ReviewView({
  word,
  dueWords,
  remainingSessionWords,
  sessionStats,
  sessionTargetCount,
  practiceSize,
  onPracticeSizeChange,
  onStartReview,
  onResetReview,
  onEndReview,
  onRate
}: {
  word?: VocabularyItem;
  dueWords: VocabularyItem[];
  remainingSessionWords: VocabularyItem[];
  sessionStats: SessionStats;
  sessionTargetCount: number;
  practiceSize: PracticeSize;
  onPracticeSizeChange: (value: PracticeSize) => void;
  onStartReview: () => void;
  onResetReview: () => void;
  onEndReview: () => void;
  onRate: (rating: ReviewRating) => void;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => setRevealed(false), [word?.id]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (!word) return;
      if (event.key === "Escape") {
        onEndReview();
      } else if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        setRevealed((value) => !value);
      } else if (revealed && ["1", "2", "3", "4"].includes(event.key)) {
        onRate(reviewRatings[Number(event.key) - 1]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [word, revealed, onRate, onEndReview]);

  // --- Idle / complete (no active card) ---
  if (!word) {
    const isComplete = sessionStats.reviewed > 0;
    const hasDue = dueWords.length > 0;
    const selectedCount = getPracticeCount(practiceSize, dueWords.length);
    const accuracy = sessionStats.reviewed === 0 ? 0 : Math.round((sessionStats.correct / sessionStats.reviewed) * 100);
    const needsWork = sessionStats.reviewed - sessionStats.correct;

    return (
      <article className="hero-card review-rest">
        <div className="hero-badge">
          <Sparkles size={14} />
          <span>{isComplete ? "session complete" : hasDue ? "ready to review" : "all caught up"}</span>
        </div>

        {isComplete ? (
          <>
            <div className="hero-figure">
              <strong className="hero-due">{accuracy}%</strong>
              <span className="hero-due-label">recall this session</span>
            </div>
            <div className="recap-row">
              <span>
                <strong>{sessionStats.correct}</strong>
                <small>moved forward</small>
              </span>
              <span>
                <strong>{needsWork}</strong>
                <small>needs work</small>
              </span>
              <span>
                <strong>{dueWords.length}</strong>
                <small>still due</small>
              </span>
            </div>
          </>
        ) : (
          <>
            <p className="hero-greeting">{hasDue ? "let's warm up the memory" : "nothing is due right now"}</p>
            <div className="hero-figure">
              <strong className="hero-due">{hasDue ? selectedCount : 0}</strong>
              <span className="hero-due-label">{hasDue ? (selectedCount === 1 ? "card this session" : "cards this session") : "words due"}</span>
            </div>
            {hasDue && <span className="hero-subnote">of {dueWords.length} due</span>}
          </>
        )}

        {hasDue && <SessionSize dueCount={dueWords.length} practiceSize={practiceSize} onChange={onPracticeSizeChange} />}

        <div className="rest-actions">
          {hasDue && (
            <button className="hero-cta" onClick={onStartReview}>
              {isComplete ? `review ${selectedCount} more` : "start review"}
              <ArrowRight size={18} />
            </button>
          )}
          {isComplete && (
            <button className="ghost-cta" onClick={onResetReview}>
              <RotateCcw size={15} />
              redo session
            </button>
          )}
        </div>
        {!hasDue && <p className="hero-meta">add words or revisit weak spots to keep the streak going.</p>}
      </article>
    );
  }

  // --- Active flashcard ---
  const sessionTotal = Math.max(sessionTargetCount, sessionStats.reviewed + remainingSessionWords.length);
  const position = Math.min(sessionStats.reviewed + 1, sessionTotal);
  const nextWord = remainingSessionWords[1];

  return (
    <div className="review-deck">
      <div className="deck-topbar">
        <span className="deck-progress">
          {sessionStats.reviewed} reviewed · {remainingSessionWords.length} left
        </span>
        <button className="deck-end" onClick={onEndReview} title="End session (Esc)">
          <X size={14} />
          end session
        </button>
      </div>

      <div className="deck">
        <div className="deck-shadow" aria-hidden="true">
          <span className="deck-shadow-term">{nextWord?.french ?? "fin"}</span>
        </div>

        <div
          className={`deck-scene${revealed ? " flipped" : ""}`}
          onClick={() => setRevealed((value) => !value)}
          role="button"
          tabIndex={0}
          aria-pressed={revealed}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setRevealed((value) => !value);
            }
          }}
        >
          <div className="deck-inner">
            {/* Front: the French prompt */}
            <div className="deck-face deck-front">
              <div className="deck-badge">
                <span>{word.level}</span>
                <span className="deck-badge-sep">·</span>
                <span>{word.category}</span>
              </div>
              <p className="deck-term">{word.french}</p>
              <div className="deck-foot">
                <PronunciationButton text={word.french} />
                <span className="deck-hint">tap to reveal</span>
              </div>
            </div>

            {/* Back: meaning + context */}
            <div className="deck-face deck-back">
              <div className="deck-back-head">
                <span className="deck-back-term">{word.french}</span>
                <span className="deck-badge small">{word.level}</span>
              </div>
              <p className="deck-meaning">{word.meaning}</p>
              {word.example && (
                <p className="deck-example">
                  <span className="fr">{word.example}</span>
                  {word.translation && <span className="en">{word.translation}</span>}
                </p>
              )}
              {word.structures.length > 0 && (
                <div className="deck-structures">
                  {word.structures.map((structure) => (
                    <span className="deck-chip" key={structure}>
                      {structure}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="deck-controls">
        {revealed ? (
          <div className="rating-block">
            <span className="rating-prompt">how well did you recall it?</span>
            <div className="rating-row">
              {ratingConfig.map((cfg) => (
                <button className={`rating-pill ${cfg.tone}`} key={cfg.rating} onClick={() => onRate(cfg.rating)}>
                  <strong>{cfg.label}</strong>
                  <span>{cfg.next(word)}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <button className="reveal-btn" onClick={() => setRevealed(true)}>
            reveal definition
          </button>
        )}
      </div>

      <span className="deck-counter">
        {position} / {sessionTotal}
      </span>
    </div>
  );
}
