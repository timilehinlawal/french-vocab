import mammoth from "mammoth";
import { parseCefrLevel, parsePriority } from "./options";
import type { AddWordForm } from "./vocabulary";

export type DocumentImportCandidate = AddWordForm & {
  sourceLine: string;
};

export type DocumentImportParseResult = {
  candidates: DocumentImportCandidate[];
  skippedLines: number;
  rawLineCount: number;
  warnings: string[];
};

const cellBreak = /\s{2,}|\t+/;
const pairSeparators = /\s+(?:-|–|—)\s+|[:;]\s+/;
const headingPattern = /^(french|word|term|mot|vocabulaire|meaning|translation|english|level|source)\b/i;

const cleanCell = (value: string) => value.replace(/\s+/g, " ").replace(/^[-•*\d.)\s]+/, "").trim();

const splitCandidateLine = (line: string) => {
  const normalized = line.trim();
  if (!normalized || headingPattern.test(normalized)) return null;

  const tableCells = normalized.split(cellBreak).map(cleanCell).filter(Boolean);
  if (tableCells.length >= 2) {
    return tableCells;
  }

  const pair = normalized.split(pairSeparators).map(cleanCell).filter(Boolean);
  return pair.length >= 2 ? pair : null;
};

export const parseVocabularyDocumentText = (text: string, sourceName: string): DocumentImportParseResult => {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const candidates: DocumentImportCandidate[] = [];
  let skippedLines = 0;

  for (const line of lines) {
    const cells = splitCandidateLine(line);
    if (!cells) {
      skippedLines += 1;
      continue;
    }

    const [french, meaning, level, partOfSpeech, priority] = cells;
    if (!french || !meaning) {
      skippedLines += 1;
      continue;
    }

    candidates.push({
      french,
      meaning,
      level: parseCefrLevel(level ?? "", "B2"),
      partOfSpeech: partOfSpeech || (french.includes(" ") ? "expression" : "word"),
      example: "",
      translation: "",
      structures: `${french} en contexte`,
      synonymLadder: "",
      wordFamily: "",
      tcfPriority: parsePriority(priority ?? "", "Medium"),
      source: `Word document: ${sourceName}`,
      tags: "docx, needs-practice",
      sourceLine: line
    });
  }

  return {
    candidates,
    skippedLines,
    rawLineCount: lines.length,
    warnings: []
  };
};

export const extractVocabularyDocument = async (file: File): Promise<DocumentImportParseResult> => {
  if (!file.name.toLowerCase().endsWith(".docx")) {
    throw new Error("Upload a .docx Word document.");
  }

  const result = await mammoth.extractRawText({ arrayBuffer: await file.arrayBuffer() });
  return {
    ...parseVocabularyDocumentText(result.value, file.name),
    warnings: result.messages.map((message) => message.message)
  };
};
