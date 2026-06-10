import type { ImportBatch, ReviewAttempt, VocabularyItem, VocabularyStatus } from "./types";

const statuses: VocabularyStatus[] = ["New", "Learning", "Familiar", "Active", "Mastered"];

export const isDue = (word: VocabularyItem, now = new Date()) => {
  return new Date(word.dueAt).getTime() <= now.getTime();
};

export const accuracy = (attempts: ReviewAttempt[]) => {
  if (attempts.length === 0) return 0;
  const correct = attempts.filter((attempt) => attempt.result === "correct").length;
  return Math.round((correct / attempts.length) * 100);
};

export const byStatus = (items: VocabularyItem[]) => {
  return statuses.map((status) => ({
    status,
    count: items.filter((item) => item.status === status).length
  }));
};

export const countBy = <T,>(items: T[], getter: (item: T) => string) => {
  const counts = new Map<string, number>();
  items.forEach((item) => {
    const key = getter(item);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });

  return [...counts.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
};

export const difficultWords = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[]) => {
  return vocabulary
    .map((word) => {
      const wordAttempts = attempts.filter((attempt) => attempt.wordId === word.id);
      const misses = wordAttempts.filter((attempt) => attempt.result === "incorrect").length + word.lapses;
      return { ...word, difficultyScore: misses * 2 - word.successStreak };
    })
    .filter((word) => word.difficultyScore > 0)
    .sort((a, b) => b.difficultyScore - a.difficultyScore)
    .slice(0, 5);
};

export const reviewVolumeLast7Days = (attempts: ReviewAttempt[]) => {
  const now = new Date();
  return Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(now);
    date.setDate(now.getDate() - (6 - index));
    const key = date.toISOString().slice(0, 10);
    const count = attempts.filter((attempt) => attempt.createdAt.slice(0, 10) === key).length;
    return { label: date.toLocaleDateString(undefined, { weekday: "short" }), count };
  });
};

export const currentStreak = (attempts: ReviewAttempt[]) => {
  const reviewedDates = new Set(attempts.map((attempt) => attempt.createdAt.slice(0, 10)));
  let streak = 0;
  const cursor = new Date();

  while (reviewedDates.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
};

export const streakSummary = (attempts: ReviewAttempt[], dailyGoal = 5) => {
  const reviewedDates = new Set(attempts.map((attempt) => attempt.createdAt.slice(0, 10)));
  const today = new Date();
  const todayKey = today.toISOString().slice(0, 10);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayKey = yesterday.toISOString().slice(0, 10);
  const reviewsToday = attempts.filter((attempt) => attempt.createdAt.slice(0, 10) === todayKey).length;
  const startDate = reviewedDates.has(todayKey) ? today : reviewedDates.has(yesterdayKey) ? yesterday : today;
  const cursor = new Date(startDate);
  let current = 0;

  while (reviewedDates.has(cursor.toISOString().slice(0, 10))) {
    current += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  const sortedDates = [...reviewedDates].sort();
  let longest = 0;
  let run = 0;
  let previous = "";

  sortedDates.forEach((dateKey) => {
    if (!previous) {
      run = 1;
    } else {
      const expected = new Date(previous);
      expected.setDate(expected.getDate() + 1);
      run = expected.toISOString().slice(0, 10) === dateKey ? run + 1 : 1;
    }

    longest = Math.max(longest, run);
    previous = dateKey;
  });

  return {
    current,
    longest,
    dailyGoal,
    reviewsToday,
    reviewsNeeded: Math.max(0, dailyGoal - reviewsToday),
    maintainedToday: reviewsToday >= dailyGoal
  };
};

export const importGrowth = (imports: ImportBatch[]) => {
  return imports.reduce((sum, batch) => sum + batch.acceptedRows, 0);
};

export const tcfReadiness = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[]) => {
  const tcfWords = vocabulary.filter((word) => word.tcfPriority === "High");
  const mastered = tcfWords.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const relatedAttempts = attempts.filter((attempt) => tcfWords.some((word) => word.id === attempt.wordId));

  return {
    total: tcfWords.length,
    mastered,
    accuracy: accuracy(relatedAttempts)
  };
};
