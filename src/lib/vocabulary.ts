import { createContextualExample, createContextualTranslation } from "./examples";
import { normalizeTerm, slugifyTerm, splitList, uniqueList } from "./terms";
import type { CefrLevel, Priority, VocabularyItem } from "./types";

export type AddWordForm = {
  french: string;
  meaning: string;
  level: CefrLevel;
  partOfSpeech: string;
  example: string;
  translation: string;
  structures: string;
  synonymLadder: string;
  wordFamily: string;
  priority: Priority;
  source: string;
  tags: string;
};

export const emptyAddWordForm: AddWordForm = {
  french: "",
  meaning: "",
  level: "Unknown",
  partOfSpeech: "expression",
  example: "",
  translation: "",
  structures: "",
  synonymLadder: "",
  wordFamily: "",
  priority: "Medium",
  source: "Manual entry",
  tags: "manual"
};

export const hasRequiredAddWordFields = (form: AddWordForm) => form.french.trim().length > 0 && form.meaning.trim().length > 0;

export const findDuplicateVocabulary = (vocabulary: VocabularyItem[], french: string) => {
  const normalizedFrench = normalizeTerm(french);
  return vocabulary.find((word) => normalizeTerm(word.french) === normalizedFrench);
};

export const createSuggestedSetup = (form: AddWordForm) => {
  const french = form.french.trim() || "ce mot";
  const meaning = form.meaning.trim() || "this idea";
  const exampleWord = {
    french,
    meaning,
    partOfSpeech: form.partOfSpeech.trim() || (french.includes(" ") ? "expression" : "word")
  };

  return {
    example: createContextualExample(exampleWord),
    translation: createContextualTranslation(exampleWord),
    structures: form.structures.trim() || `${french} en contexte`,
    synonymLadder: form.synonymLadder.trim(),
    wordFamily: form.wordFamily.trim(),
    tags: form.tags.trim() || "manual, needs-practice",
    partOfSpeech: exampleWord.partOfSpeech,
    source: form.source.trim() || "Manual entry",
    meaning
  };
};

export const createVocabularyItem = (form: AddWordForm, createdAt: string): VocabularyItem => {
  const french = form.french.trim();
  const meaning = form.meaning.trim();
  const suggestion = createSuggestedSetup(form);

  return {
    id: `${slugifyTerm(french)}-${Date.now().toString(36)}`,
    french,
    meaning,
    category: "General Vocabulary",
    level: form.level,
    partOfSpeech: form.partOfSpeech.trim() || suggestion.partOfSpeech,
    example: form.example.trim() || suggestion.example,
    translation: form.translation.trim() || suggestion.translation,
    structures: splitList(form.structures || suggestion.structures),
    synonymLadder: splitList(form.synonymLadder || suggestion.synonymLadder),
    wordFamily: splitList(form.wordFamily || suggestion.wordFamily),
    priority: form.priority,
    status: "New",
    dateAdded: createdAt,
    source: form.source.trim() || suggestion.source,
    tags: splitList(form.tags || suggestion.tags),
    meaningConfirmed: true,
    dueAt: createdAt,
    successStreak: 0,
    lapses: 0
  };
};

export const wordQuality = (word: VocabularyItem) => {
  if (!word.meaningConfirmed) return { label: "Needs confirmation", tone: "danger" };
  if (!word.example || !word.translation || word.structures.length === 0) return { label: "Needs setup", tone: "warning" };

  return { label: "Ready", tone: "success" };
};

const looksLikeUsagePattern = (value: string) => /[+]/.test(value) || /\b(infinitif|nom|phrase|personne|lieu|objet|que)\b/i.test(value);

export const getSynonymLadder = (word: VocabularyItem) => uniqueList(word.synonymLadder ?? []).filter((item) => !looksLikeUsagePattern(item)).slice(0, 4);

export const getWordFamily = (word: VocabularyItem) =>
  uniqueList(word.wordFamily ?? []).filter((item) => !looksLikeUsagePattern(item) && normalizeTerm(item) !== normalizeTerm(word.french)).slice(0, 4);

export const getUsagePatterns = (word: VocabularyItem) => uniqueList([...word.structures, ...(word.wordFamily ?? []).filter(looksLikeUsagePattern)]).slice(0, 2);

const glossKey = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ");

/** English under an example, if it is a real sentence translation — not a repeat of the meaning. */
export const exampleTranslation = (word: Pick<VocabularyItem, "meaning" | "translation">) => {
  const translation = word.translation?.trim() ?? "";
  if (!translation) return "";

  const meaning = glossKey(word.meaning);
  const gloss = glossKey(translation);
  if (!meaning || gloss === meaning) return "";
  if (meaning.split(/\s*[,;/]\s*/).includes(gloss)) return "";

  return translation;
};
