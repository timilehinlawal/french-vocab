import { accuracy, byStatus, countBy, difficultWords, highPriorityProgress, importGrowth, isDue, reviewVolumeLast7Days, streakSummary } from "./analytics";
import type { ImportBatch, ReviewAttempt, VocabularyItem, VocabularyStatus } from "./types";

export type AnalyticsSummary = {
  statusCounts: { status: VocabularyStatus; count: number }[];
  levelCounts: { label: string; count: number }[];
  sourceCounts: { label: string; count: number }[];
  weak: (VocabularyItem & { difficultyScore: number })[];
  highPriority: ReturnType<typeof highPriorityProgress>;
  streak: ReturnType<typeof streakSummary>;
  accuracy: number;
  reviewVolume: { label: string; count: number }[];
  importedTotal: number;
};

export const buildAnalyticsSummary = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[], imports: ImportBatch[]): AnalyticsSummary => ({
  statusCounts: byStatus(vocabulary),
  levelCounts: countBy(vocabulary, (word) => word.level),
  sourceCounts: countBy(vocabulary, (word) => word.source),
  weak: difficultWords(vocabulary, attempts),
  highPriority: highPriorityProgress(vocabulary, attempts),
  streak: streakSummary(attempts),
  accuracy: accuracy(attempts),
  reviewVolume: reviewVolumeLast7Days(attempts),
  importedTotal: importGrowth(imports)
});

export const learnerStatus = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[]) => {
  const masteredCount = vocabulary.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const dueCount = vocabulary.filter((word) => isDue(word)).length;
  const highPriority = highPriorityProgress(vocabulary, attempts);

  if (dueCount > 10) return "French vocabulary sprint";
  if (highPriority.accuracy >= 80 && masteredCount > vocabulary.length * 0.35) return "Strengthening active recall";
  if (masteredCount > vocabulary.length * 0.2) return "Building range";

  return "Building a foundation";
};
