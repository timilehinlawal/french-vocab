import { strFromU8, unzipSync } from "fflate";
import { emptyAddWordForm, createVocabularyItem } from "./vocabulary";
import type { VocabularyItem } from "./types";

export type ParsedEntry = { french: string; meaning: string };

const decodeEntities = (value: string) =>
  value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'");

// Pull the visible text out of a chunk of WordprocessingML (joins all <w:t> runs).
const xmlText = (block: string) => {
  const runs = block.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || [];
  return decodeEntities(runs.map((run) => run.replace(/<[^>]+>/g, "")).join("")).trim();
};

// Extract text from a .docx: table rows become tab-joined cells (one row per
// line), remaining paragraphs become their own lines.
export const extractDocxText = (buffer: ArrayBuffer): string => {
  const files = unzipSync(new Uint8Array(buffer));
  const documentXml = files["word/document.xml"];
  if (!documentXml) return "";

  const xml = strFromU8(documentXml);
  const lines: string[] = [];

  for (const row of xml.match(/<w:tr\b[\s\S]*?<\/w:tr>/g) || []) {
    const cells = (row.match(/<w:tc\b[\s\S]*?<\/w:tc>/g) || []).map(xmlText).filter(Boolean);
    if (cells.length >= 2) lines.push(`${cells[0]}\t${cells[1]}`);
    else if (cells.length === 1) lines.push(cells[0]);
  }

  const withoutTables = xml.replace(/<w:tbl\b[\s\S]*?<\/w:tbl>/g, "");
  for (const paragraph of withoutTables.match(/<w:p\b[\s\S]*?<\/w:p>/g) || []) {
    const text = xmlText(paragraph);
    if (text) lines.push(text);
  }

  return lines.join("\n");
};

// Separators we try, in priority order, to split a line into french + meaning.
const SEPARATORS = ["\t", " — ", " – ", " - ", " = ", " : ", " | ", "—", "–", "=", ";", ",", ":"];

const splitEntry = (raw: string): ParsedEntry | null => {
  const line = raw.replace(/^[\s\-•*•\d.)\]]+/, "").trim();
  if (!line) return null;

  for (const separator of SEPARATORS) {
    const index = line.indexOf(separator);
    if (index <= 0 || index >= line.length - separator.length) continue;

    const french = line.slice(0, index).trim().replace(/["']/g, "");
    const meaning = line.slice(index + separator.length).trim().replace(/^["']|["']$/g, "");

    if (french && meaning && french.length <= 60) return { french, meaning };
  }

  return null;
};

const looksLikeHeader = (line: string) => /^(french|word|term|english|meaning|translation|vocab)/i.test(line.trim());

export const parseVocabularyText = (text: string): ParsedEntry[] => {
  const seen = new Set<string>();
  const entries: ParsedEntry[] = [];

  for (const line of text.split(/\r?\n/)) {
    if (looksLikeHeader(line)) continue;
    const entry = splitEntry(line);
    if (!entry) continue;

    const key = entry.french.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    entries.push(entry);
  }

  return entries;
};

export const importFile = async (file: File): Promise<ParsedEntry[]> => {
  const name = file.name.toLowerCase();

  if (name.endsWith(".docx")) {
    return parseVocabularyText(extractDocxText(await file.arrayBuffer()));
  }

  return parseVocabularyText(await file.text());
};

export const entriesToItems = (entries: ParsedEntry[], source: string, createdAt: string): VocabularyItem[] =>
  entries.map((entry, index) => {
    const item = createVocabularyItem(
      { ...emptyAddWordForm, french: entry.french, meaning: entry.meaning, source, tags: "imported" },
      createdAt
    );
    return { ...item, id: `${item.id}-${index}` };
  });
