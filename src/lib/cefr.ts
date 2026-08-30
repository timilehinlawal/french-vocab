import { seedVocabulary } from "../data/seedVocabulary";
import { normalizeTerm } from "./terms";
import type { CefrLevel, VocabularyItem } from "./types";

// Built-in word list: each seed row already carries a CEFR band. Lookups use the
// same term normalisation as duplicates, so "l’imprimante" matches "une imprimante".
const levelsByTerm = new Map<string, CefrLevel>();

for (const word of seedVocabulary) {
  const key = normalizeTerm(word.french);
  if (!key || word.level === "Unknown" || levelsByTerm.has(key)) continue;
  levelsByTerm.set(key, word.level);
}

/** CEFR for a French term from the user's list, then the built-in curriculum. */
export const inferCefrLevel = (french: string, library: VocabularyItem[] = []): CefrLevel => {
  const key = normalizeTerm(french);
  if (!key) return "Unknown";

  const owned = library.find((word) => normalizeTerm(word.french) === key && word.level !== "Unknown");
  if (owned) return owned.level;

  return levelsByTerm.get(key) ?? "Unknown";
};
