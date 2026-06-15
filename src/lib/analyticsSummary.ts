import { accuracy, byStatus, countBy, difficultWords, importGrowth, isDue, reviewVolumeLast7Days, streakSummary, tcfReadiness } from "./analytics";
import type { ImportBatch, ReviewAttempt, VocabularyItem, VocabularyStatus } from "./types";

export type AnalyticsSummary = {
  statusCounts: { status: VocabularyStatus; count: number }[];
  levelCounts: { label: string; count: number }[];
  sourceCounts: { label: string; count: number }[];
  weak: (VocabularyItem & { difficultyScore: number })[];
  tcf: ReturnType<typeof tcfReadiness>;
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
  tcf: tcfReadiness(vocabulary, attempts),
  streak: streakSummary(attempts),
  accuracy: accuracy(attempts),
  reviewVolume: reviewVolumeLast7Days(attempts),
  importedTotal: importGrowth(imports)
});

export const learnerStatus = (vocabulary: VocabularyItem[], attempts: ReviewAttempt[]) => {
  const masteredCount = vocabulary.filter((word) => word.status === "Active" || word.status === "Mastered").length;
  const dueCount = vocabulary.filter((word) => isDue(word)).length;
  const highPriority = tcfReadiness(vocabulary, attempts);

  if (dueCount > 10) return "French Vocabulary Sprint";
  if (highPriority.accuracy >= 80 && masteredCount > vocabulary.length * 0.35) return "Strengthening Active Recall";
  if (masteredCount > vocabulary.length * 0.2) return "Building B2 Range";

  return "Building B2 Foundation";
};
