import { ChevronRight } from "lucide-react";
import { isRepairWord } from "../lib/review";
import { getSynonymLadder, getUsagePatterns, getWordFamily } from "../lib/vocabulary";
import type { VocabularyItem } from "../lib/types";

export function LearningTools({ compact = false, word }: { compact?: boolean; word: VocabularyItem }) {
  const ladder = getSynonymLadder(word);
  const family = getWordFamily(word);
  const patterns = getUsagePatterns(word);

  if (ladder.length === 0 && family.length === 0 && patterns.length === 0 && !isRepairWord(word)) return null;

  return (
    <span className={`learning-tools ${compact ? "compact" : ""}`}>
      {ladder.length > 0 && (
        <span className="learning-tool-row tool-card">
          <span className="tool-label">
            <strong>Synonyms</strong>
            <small>{ladder.length} options</small>
          </span>
          <span className="tool-content ladder-row">
            {ladder.map((item, index) => (
              <span className="ladder-chip" key={`${word.id}-ladder-${item}`}>
                {index > 0 && <ChevronRight size={13} />}
                {item}
              </span>
            ))}
          </span>
        </span>
      )}

      {family.length > 0 && (
        <span className="learning-tool-row tool-card">
          <span className="tool-label">
            <strong>Family</strong>
            <small>same root</small>
          </span>
          <span className="tool-content family-row">
            {family.map((item) => (
              <span className="family-chip" key={`${word.id}-family-${item}`}>{item}</span>
            ))}
          </span>
        </span>
      )}

      {patterns.length > 0 && (
        <span className="learning-tool-row tool-card">
          <span className="tool-label">
            <strong>Pattern</strong>
            <small>usage</small>
          </span>
          <span className="tool-content pattern-row">
            {patterns.map((item) => (
              <span className="pattern-chip" key={`${word.id}-pattern-${item}`}>{item}</span>
            ))}
          </span>
        </span>
      )}

      {isRepairWord(word) && (
        <span className="repair-note">
          <strong>Repair review</strong>
          <span>{word.repairPrompt ?? "Use this word in one TCF-style sentence, then repeat it with a synonym."}</span>
        </span>
      )}
    </span>
  );
}
