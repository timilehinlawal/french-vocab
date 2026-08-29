import { normalizeTerm } from "./terms";
import type { VocabularyItem } from "./types";

const MAX_SUGGESTIONS = 3;

const uniqueKeepOrder = (items: string[]) => {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const item of items) {
    const trimmed = item.replace(/\s+/g, " ").trim();
    const key = trimmed.toLowerCase();
    if (!trimmed || seen.has(key)) continue;
    seen.add(key);
    result.push(trimmed);
  }

  return result;
};

export const splitSenses = (value: string) =>
  value
    .split(/[,;/]| - /)
    .map((part) => part.trim())
    .filter(Boolean);

export const expandSenses = (meaning: string) => {
  const extra: string[] = [];

  for (const sense of splitSenses(meaning)) {
    extra.push(sense);
    if (/^to\s+\S+/i.test(sense) && sense.split(/\s+/).length <= 5) {
      extra.push(sense.replace(/^to\s+/i, ""));
    }
  }

  return uniqueKeepOrder(extra);
};

export const mergeSuggestions = (...lists: string[][]) => uniqueKeepOrder(lists.flat()).slice(0, MAX_SUGGESTIONS);

export const localFrenchSuggestions = (vocabulary: VocabularyItem[], query: string) => {
  const needle = normalizeTerm(query);
  if (needle.length < 2) return [];

  const scored = vocabulary
    .map((word) => {
      const hay = normalizeTerm(word.french);
      let score = 0;
      if (hay === needle) score = 3;
      else if (hay.startsWith(needle)) score = 2;
      else if (hay.includes(needle)) score = 1;
      return { french: word.french, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.french.localeCompare(b.french, "fr"));

  return uniqueKeepOrder(scored.map((row) => row.french)).slice(0, MAX_SUGGESTIONS);
};

export const localMeaningSuggestions = (vocabulary: VocabularyItem[], query: string) => {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];

  const pool = vocabulary.flatMap((word) => expandSenses(word.meaning));
  const scored = pool
    .map((meaning) => {
      const hay = meaning.toLowerCase();
      let score = 0;
      if (hay === needle) score = 3;
      else if (hay.startsWith(needle)) score = 2;
      else if (hay.includes(needle)) score = 1;
      return { meaning, score };
    })
    .filter((row) => row.score > 0)
    .sort((a, b) => b.score - a.score || a.meaning.localeCompare(b.meaning, "en"));

  return uniqueKeepOrder(scored.map((row) => row.meaning)).slice(0, MAX_SUGGESTIONS);
};

export const localTranslations = (vocabulary: VocabularyItem[], french: string) => {
  const needle = normalizeTerm(french);
  if (!needle) return [];

  const matches = vocabulary.filter((word) => {
    const hay = normalizeTerm(word.french);
    return hay === needle || hay.startsWith(needle) || (hay.length >= 3 && needle.startsWith(hay));
  });

  const ranked = [...matches].sort((a, b) => {
    const aExact = Number(normalizeTerm(a.french) === needle);
    const bExact = Number(normalizeTerm(b.french) === needle);
    return bExact - aExact;
  });

  return uniqueKeepOrder(ranked.flatMap((word) => expandSenses(word.meaning))).slice(0, MAX_SUGGESTIONS);
};

const stripHtml = (value: string) =>
  value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

export async function fetchFrenchSuggestions(query: string, signal?: AbortSignal) {
  const q = query.trim();
  if (q.length < 2) return [];

  const url = `https://fr.wiktionary.org/w/api.php?action=opensearch&search=${encodeURIComponent(q)}&limit=3&namespace=0&format=json&origin=*`;
  const response = await fetch(url, { signal });
  if (!response.ok) return [];

  const data = (await response.json()) as [string, string[]];
  return uniqueKeepOrder((data[1] ?? []).filter((title) => !title.includes(":"))).slice(0, MAX_SUGGESTIONS);
}

export async function fetchEnglishWordSuggestions(query: string, signal?: AbortSignal) {
  const q = query.trim();
  if (q.length < 2) return [];

  const url = `https://api.datamuse.com/sug?s=${encodeURIComponent(q)}&max=3`;
  const response = await fetch(url, { signal });
  if (!response.ok) return [];

  const data = (await response.json()) as { word?: string }[];
  return uniqueKeepOrder(data.map((row) => row.word ?? "")).slice(0, MAX_SUGGESTIONS);
}

export async function fetchTranslations(french: string, signal?: AbortSignal) {
  const term = french.trim();
  if (!term) return [];

  const [wiki, memory] = await Promise.all([fetchWiktionaryTranslations(term, signal), fetchMyMemoryTranslations(term, signal)]);
  return mergeSuggestions(wiki, memory);
}

const fetchWiktionaryTranslations = async (term: string, signal?: AbortSignal) => {
  try {
    const url = `https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(term)}`;
    const response = await fetch(url, { signal, headers: { Accept: "application/json" } });
    if (!response.ok) return [];

    const data = (await response.json()) as Record<string, { definitions?: { definition?: string }[] }[]>;
    const frenchEntries = data.fr ?? [];
    return frenchEntries
      .flatMap((entry) => (entry.definitions ?? []).map((item) => stripHtml(item.definition ?? "")))
      .flatMap(expandSenses);
  } catch {
    return [];
  }
};

const fetchMyMemoryTranslations = async (term: string, signal?: AbortSignal) => {
  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(term)}&langpair=fr|en`;
    const response = await fetch(url, { signal });
    if (!response.ok) return [];

    const data = (await response.json()) as {
      responseData?: { translatedText?: string };
      matches?: { translation?: string }[];
    };

    return [data.responseData?.translatedText, ...(data.matches ?? []).map((row) => row.translation)]
      .filter((value): value is string => Boolean(value && value.trim() && !/please select/i.test(value)))
      .flatMap(expandSenses);
  } catch {
    return [];
  }
};
