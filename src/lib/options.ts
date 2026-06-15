import type { CefrLevel, Priority, VocabularyStatus } from "./types";

export const statusOrder: readonly VocabularyStatus[] = ["New", "Learning", "Familiar", "Active", "Mastered"];
export const levelOptions: readonly CefrLevel[] = ["B1", "B2", "C1", "Unknown"];
export const statusOptions: readonly VocabularyStatus[] = statusOrder;
export const priorityOptions: readonly Priority[] = ["Low", "Medium", "High"];

export const isCefrLevel = (value: unknown): value is CefrLevel => levelOptions.some((level) => level === value);
export const isPriority = (value: unknown): value is Priority => priorityOptions.some((priority) => priority === value);
export const isVocabularyStatus = (value: unknown): value is VocabularyStatus => statusOptions.some((status) => status === value);

export const parseCefrLevel = (value: string, fallback: CefrLevel): CefrLevel => (isCefrLevel(value) ? value : fallback);
export const parsePriority = (value: string, fallback: Priority): Priority => (isPriority(value) ? value : fallback);
export const parseVocabularyStatus = (value: string, fallback: VocabularyStatus): VocabularyStatus => (isVocabularyStatus(value) ? value : fallback);
