import type { PracticeSize } from "./types";

const maxPracticeSessionSize = 100;

export const isPracticeSize = (value: unknown): value is PracticeSize => typeof value === "number" && Number.isInteger(value) && value > 0;

export const parsePracticeSize = (value: unknown, fallback: PracticeSize = 10): PracticeSize => {
  if (isPracticeSize(value)) return value;
  if (typeof value !== "string") return fallback;

  const numericValue = Number(value);

  if (isPracticeSize(numericValue)) return numericValue;

  return fallback;
};

export const getPracticeMax = (dueCount: number) => Math.min(Math.max(1, dueCount), maxPracticeSessionSize);

export const getPracticeCount = (practiceSize: PracticeSize, dueCount: number) =>
  dueCount === 0 ? 0 : Math.min(Math.max(1, practiceSize), getPracticeMax(dueCount));
