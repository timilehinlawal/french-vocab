import { seedAttempts, seedImports, seedVocabulary } from "../data/seedVocabulary";
import type { ImportBatch, ReviewAttempt, VocabularyItem } from "./types";

const VOCABULARY_KEY = "fvt:vocabulary";
const ATTEMPTS_KEY = "fvt:attempts";
const IMPORTS_KEY = "fvt:imports";

const normalizeTerm = (value: string) => {
  const base = value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘`]/g, "'")
    .replace(/\s*[,/]\s*/g, " ")
    .replace(/\s+/g, " ");
  const withoutArticle = base.replace(/^(un|une|le|la|les|l')\s+/, "");
  const parts = withoutArticle.split(" ");

  if (parts.length === 2 && parts[1].startsWith(parts[0]) && parts[1].length <= parts[0].length + 3) {
    return parts[0];
  }

  return withoutArticle;
};

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

export const loadVocabulary = () =>
  mergeSeedVocabulary(read<VocabularyItem[]>(VOCABULARY_KEY, [])).map((word) => ({
    ...word,
    meaningConfirmed: word.meaningConfirmed ?? true
  }));
export const loadAttempts = () => read<ReviewAttempt[]>(ATTEMPTS_KEY, seedAttempts);
export const loadImports = () => mergeSeedImports(read<ImportBatch[]>(IMPORTS_KEY, []));

export const saveVocabulary = (items: VocabularyItem[]) => {
  window.localStorage.setItem(VOCABULARY_KEY, JSON.stringify(items));
};

export const saveAttempts = (attempts: ReviewAttempt[]) => {
  window.localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(attempts));
};

export const saveImports = (imports: ImportBatch[]) => {
  window.localStorage.setItem(IMPORTS_KEY, JSON.stringify(imports));
};
