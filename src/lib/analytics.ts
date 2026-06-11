import type { ImportBatch, ReviewAttempt, VocabularyItem, VocabularyStatus } from "./types";

const statuses: VocabularyStatus[] = ["New", "Learning", "Familiar", "Active", "Mastered"];

const localDateKey = (date: Date) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const attemptDateKey = (attempt: ReviewAttempt) => localDateKey(new Date(attempt.createdAt));

const getDailyReviewCounts = (attempts: ReviewAttempt[]) => {
  const counts = new Map<string, number>();

  attempts.forEach((attempt) => {
    const key = attemptDateKey(attempt);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });

  return counts;
};

const addDaysToKey = (dateKey: string, days: number) => {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + days);
  return localDateKey(date);
};

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
  const dailyCounts = getDailyReviewCounts(attempts);

  return Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(now);
    date.setDate(now.getDate() - (6 - index));
    const key = localDateKey(date);
    const count = dailyCounts.get(key) ?? 0;
    return { label: date.toLocaleDateString(undefined, { weekday: "short" }), count };
  });
};

export const currentStreak = (attempts: ReviewAttempt[]) => {
  const reviewedDates = new Set(attempts.map(attemptDateKey));
  let streak = 0;
  const cursor = new Date();

  while (reviewedDates.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
};

export const streakSummary = (attempts: ReviewAttempt[], dailyGoal = 5) => {
  const dailyCounts = getDailyReviewCounts(attempts);
  const today = new Date();
  const todayKey = localDateKey(today);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const yesterdayKey = localDateKey(yesterday);
  const reviewsToday = dailyCounts.get(todayKey) ?? 0;
  const qualifiedDates = new Set([...dailyCounts.entries()].filter(([, count]) => count >= dailyGoal).map(([dateKey]) => dateKey));
  let cursorKey = qualifiedDates.has(todayKey) ? todayKey : qualifiedDates.has(yesterdayKey) ? yesterdayKey : todayKey;
  let current = 0;

  while (qualifiedDates.has(cursorKey)) {
    current += 1;
    cursorKey = addDaysToKey(cursorKey, -1);
  }

  const sortedDates = [...qualifiedDates].sort();
  let longest = 0;
  let run = 0;
  let previous = "";

  sortedDates.forEach((dateKey) => {
    if (!previous) {
      run = 1;
    } else {
      run = addDaysToKey(previous, 1) === dateKey ? run + 1 : 1;
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
  const tcfWordIds = new Set(tcfWords.map((word) => word.id));
  const mastered = tcfWords.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const relatedAttempts = attempts.filter((attempt) => tcfWordIds.has(attempt.wordId));

  return {
    total: tcfWords.length,
    mastered,
    attempts: relatedAttempts.length,
    accuracy: accuracy(relatedAttempts)
  };
};
