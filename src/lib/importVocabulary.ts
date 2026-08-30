import { strFromU8, unzipSync } from "fflate";
import { inferCefrLevel } from "./cefr";
import { parseOptionalCefrLevel } from "./options";
import { emptyAddWordForm, createVocabularyItem } from "./vocabulary";
import type { CefrLevel, VocabularyItem } from "./types";

export type ParsedEntry = { french: string; meaning: string; level?: CefrLevel };

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
    if (cells.length >= 2) lines.push(cells.join("\t"));
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

const peelLevel = (chunks: string[]): { rest: string[]; level?: CefrLevel } => {
  let level: CefrLevel | undefined;
  const rest: string[] = [];

  for (const chunk of chunks) {
    const parsed = parseOptionalCefrLevel(chunk);
    if (parsed && !level) level = parsed;
    else rest.push(chunk);
  }

  return { rest, level };
};

const splitEntry = (raw: string): ParsedEntry | null => {
  const line = raw.replace(/^[\s\-•*•\d.)\]]+/, "").trim();
  if (!line) return null;

  const tabbed = line.split(/\t/).map((part) => part.trim()).filter(Boolean);
  if (tabbed.length >= 2) {
    const { rest, level } = peelLevel(tabbed);
    if (rest.length >= 2 && rest[0].length <= 60) {
      return { french: rest[0].replace(/["']/g, ""), meaning: rest.slice(1).join(" ").replace(/^["']|["']$/g, ""), level };
    }
  }

  for (const separator of SEPARATORS) {
    if (separator === "\t") continue;
    const index = line.indexOf(separator);
    if (index <= 0 || index >= line.length - separator.length) continue;

    const left = line.slice(0, index).trim().replace(/["']/g, "");
    const right = line.slice(index + separator.length).trim().replace(/^["']|["']$/g, "");
    const { rest, level } = peelLevel([left, ...right.split(separator).map((part) => part.trim()).filter(Boolean)]);
    const french = rest[0] ?? "";
    const meaning = rest.slice(1).join(separator === "," ? ", " : " ").trim();

    if (french && meaning && french.length <= 60) return { french, meaning, level };
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

export const entriesToItems = (entries: ParsedEntry[], source: string, createdAt: string, library: VocabularyItem[] = []): VocabularyItem[] =>
  entries.map((entry, index) => {
    const item = createVocabularyItem(
      {
        ...emptyAddWordForm,
        french: entry.french,
        meaning: entry.meaning,
        level: entry.level ?? inferCefrLevel(entry.french, library),
        source,
        tags: "imported"
      },
      createdAt
    );
    return { ...item, id: `${item.id}-${index}` };
  });
