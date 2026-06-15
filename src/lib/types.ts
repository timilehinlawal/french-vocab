export type VocabularyStatus = "New" | "Learning" | "Familiar" | "Active" | "Mastered";
export type CefrLevel = "B1" | "B2" | "C1" | "Unknown";
export type Priority = "Low" | "Medium" | "High";
export type ReviewRating = "Again" | "Hard" | "Good" | "Easy";
export type PracticeMode = "Flashcards" | "Multiple Choice" | "Typing" | "Listening";
export type PracticeSize = number;
export type ReviewDirection = "French -> English" | "English -> French";

export interface VocabularyItem {
  id: string;
  french: string;
  meaning: string;
  category: string;
  level: CefrLevel;
  partOfSpeech: string;
  example: string;
  translation: string;
  structures: string[];
  tcfPriority: Priority;
  status: VocabularyStatus;
  dateAdded: string;
  source: string;
  tags: string[];
  synonymLadder?: string[];
  wordFamily?: string[];
  repairPrompt?: string;
  meaningConfirmed?: boolean;
  dueAt: string;
  lastReviewedAt?: string;
  successStreak: number;
  lapses: number;
}

export interface ReviewAttempt {
  id: string;
  wordId: string;
  mode: PracticeMode;
  direction: ReviewDirection;
  result: "correct" | "incorrect";
  rating: ReviewRating;
  createdAt: string;
  responseTimeMs?: number;
}

export interface ImportBatch {
  id: string;
  source: string;
  uploadDate: string;
  acceptedRows: number;
  skippedDuplicates: number;
  invalidRows: number;
}
