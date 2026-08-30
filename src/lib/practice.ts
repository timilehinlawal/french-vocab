import type { PracticeSize } from "./types";

export const isPracticeSize = (value: unknown): value is PracticeSize => typeof value === "number" && Number.isInteger(value) && value > 0;

export const parsePracticeSize = (value: unknown, fallback: PracticeSize = 10): PracticeSize => {
  if (isPracticeSize(value)) return value;
  if (typeof value !== "string") return fallback;

  const numericValue = Number(value);

  if (isPracticeSize(numericValue)) return numericValue;

  return fallback;
};

export const getPracticeMax = (dueCount: number) => Math.max(1, dueCount);

export const getPracticeCount = (practiceSize: PracticeSize, dueCount: number) =>
  dueCount === 0 ? 0 : Math.min(Math.max(1, practiceSize), getPracticeMax(dueCount));

export const shuffle = <T>(items: T[]): T[] => {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
};

/** Keep the first item (the one overview advertises) and shuffle the rest. */
export const pickReviewSession = <T>(items: T[], count: number): T[] => {
  if (items.length === 0 || count <= 0) return [];
  const [lead, ...rest] = items;
  return [lead, ...shuffle(rest)].slice(0, count);
};
