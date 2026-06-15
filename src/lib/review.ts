import { statusOrder } from "./options";
import { uniqueList } from "./terms";
import type { ReviewAttempt, ReviewRating, VocabularyItem, VocabularyStatus } from "./types";

export type SessionReview = {
  wordId: string;
  french: string;
  meaning: string;
  rating: ReviewRating;
  result: "correct" | "incorrect";
};

export type SessionStats = {
  reviewed: number;
  correct: number;
  again: number;
  reviewedIds: string[];
  reviews: SessionReview[];
};

export const emptySessionStats: SessionStats = { reviewed: 0, correct: 0, again: 0, reviewedIds: [], reviews: [] };

export const reviewRatings = ["Again", "Hard", "Good", "Easy"] as const;

export const scheduleByRating: Record<ReviewRating, number> = {
  Again: 0,
  Hard: 1,
  Good: 3,
  Easy: 7
};

const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

const addMinutes = (minutes: number) => new Date(Date.now() + minutes * 60 * 1000).toISOString();

export const reviewResult = (rating: ReviewRating) => (rating === "Again" || rating === "Hard" ? "incorrect" : "correct");

export const advanceStatus = (status: VocabularyStatus, rating: ReviewRating): VocabularyStatus => {
  if (rating === "Again") return status === "New" ? "New" : "Learning";
  if (rating === "Hard") return status === "New" ? "Learning" : status;

  const index = statusOrder.indexOf(status);
  return statusOrder[Math.min(index + (rating === "Easy" ? 2 : 1), statusOrder.length - 1)];
};

export const isRepairWord = (word: VocabularyItem) => word.tags.includes("repair") || word.lapses >= 2;

export const repairScore = (word: VocabularyItem) => (isRepairWord(word) ? 100 : 0) + word.lapses * 8 - word.successStreak;

export const nextDueForRating = (rating: ReviewRating, nextLapses: number) => {
  if (rating === "Again") return addMinutes(nextLapses >= 2 ? 5 : 10);
  if (rating === "Hard") return nextLapses >= 2 ? addMinutes(30) : addDays(scheduleByRating[rating]);

  return addDays(scheduleByRating[rating]);
};

export const createReviewAttempt = (wordId: string, rating: ReviewRating, createdAt: string): ReviewAttempt => ({
  id: crypto.randomUUID(),
  wordId,
  mode: "Flashcards",
  direction: "French -> English",
  result: reviewResult(rating),
  rating,
  createdAt,
  responseTimeMs: Math.round(2400 + Math.random() * 5000)
});

export const applyReviewRating = (word: VocabularyItem, rating: ReviewRating, reviewedAt: string): VocabularyItem => {
  const result = reviewResult(rating);
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
    lastReviewedAt: reviewedAt,
    successStreak: nextSuccessStreak,
    lapses: nextLapses,
    tags: nextTags
  };
};

export const ratingDelayLabel = (rating: ReviewRating, lapses: number) => {
  if (rating === "Again") return lapses >= 1 ? "5 min" : "10 min";
  if (rating === "Hard" && lapses >= 1) return "30 min";

  return `${scheduleByRating[rating]} days`;
};
