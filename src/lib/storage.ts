import { seedImports, seedVocabulary } from "../data/seedVocabulary";
import { createContextualExample, createContextualTranslation, isGenericExample } from "./examples";
import { parsePracticeSize } from "./practice";
import { normalizeTerm } from "./terms";
import type { ImportBatch, PracticeSize, ReviewAttempt, VocabularyItem } from "./types";

const VOCABULARY_KEY = "fvt:vocabulary";
const ATTEMPTS_KEY = "fvt:attempts";
const IMPORTS_KEY = "fvt:imports";
const PRACTICE_SIZE_KEY = "fvt:practice-size";
const GUEST_KEY = "fvt:guest";
const DEMO_ATTEMPT_IDS = new Set(["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8"]);

const read = <T,>(key: string, fallback: T): T => {
  const stored = window.localStorage.getItem(key);
  if (!stored) return fallback;

  try {
    return JSON.parse(stored) as T;
  } catch {
    return fallback;
  }
};

const mergeSeedVocabulary = (stored: VocabularyItem[]) => {
  const merged = new Map(seedVocabulary.map((word) => [normalizeTerm(word.french), word]));

  stored.forEach((word) => {
    const key = normalizeTerm(word.french);
    const seeded = merged.get(key);
    const generatedSeedSource = word.source === "Notion vocabulary database" || word.source.startsWith("Manual TCF vocabulary batch");

    if (!seeded && generatedSeedSource) return;

    merged.set(key, {
      ...seeded,
      ...word,
      example: generatedSeedSource ? seeded?.example ?? word.example : word.example,
      translation: generatedSeedSource ? seeded?.translation ?? word.translation : word.translation,
      synonymLadder: generatedSeedSource ? seeded?.synonymLadder : word.synonymLadder?.length ? word.synonymLadder : seeded?.synonymLadder,
      wordFamily: generatedSeedSource ? seeded?.wordFamily : word.wordFamily?.length ? word.wordFamily : seeded?.wordFamily,
      repairPrompt: generatedSeedSource ? seeded?.repairPrompt : word.repairPrompt || seeded?.repairPrompt
    });
  });

  return [...merged.values()];
};

const mergeSeedImports = (stored: ImportBatch[]) => {
  const merged = new Map(seedImports.map((batch) => [batch.id, batch]));

  stored.forEach((batch) => {
    if (merged.has(batch.id)) return;
    merged.set(batch.id, batch);
  });

  return [...merged.values()];
};

const withFallbackExample = (word: VocabularyItem): VocabularyItem => {
  const french = word.french.trim() || "ce mot";
  const example = !word.example?.trim() || isGenericExample(word.example) ? createContextualExample(word) : word.example.trim();
  const translation =
    !word.translation?.trim() || isGenericExample(word.example)
      ? createContextualTranslation(word)
      : word.translation.trim();

  return {
    ...word,
    example,
    translation
  };
};

export const loadVocabulary = () =>
  mergeSeedVocabulary(read<VocabularyItem[]>(VOCABULARY_KEY, [])).map((word) =>
    withFallbackExample({
      ...word,
      meaningConfirmed: word.meaningConfirmed ?? true
    })
  );
export const loadAttempts = () => read<ReviewAttempt[]>(ATTEMPTS_KEY, []).filter((attempt) => !DEMO_ATTEMPT_IDS.has(attempt.id));
export const loadImports = () => mergeSeedImports(read<ImportBatch[]>(IMPORTS_KEY, []));
export const loadPracticeSize = () => {
  const stored = read<unknown>(PRACTICE_SIZE_KEY, 10);
  return parsePracticeSize(stored);
};

export const saveVocabulary = (items: VocabularyItem[]) => {
  window.localStorage.setItem(VOCABULARY_KEY, JSON.stringify(items));
};

export const saveAttempts = (attempts: ReviewAttempt[]) => {
  window.localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
};

export const saveImports = (imports: ImportBatch[]) => {
  window.localStorage.setItem(IMPORTS_KEY, JSON.stringify(imports));
};

export const savePracticeSize = (practiceSize: PracticeSize) => {
  window.localStorage.setItem(PRACTICE_SIZE_KEY, JSON.stringify(practiceSize));
};

// Remembers that a visitor chose to skip sign-in, so they aren't gated again.
export const loadGuest = () => window.localStorage.getItem(GUEST_KEY) === "true";
export const saveGuest = (guest: boolean) => {
  window.localStorage.setItem(GUEST_KEY, guest ? "true" : "false");
};
