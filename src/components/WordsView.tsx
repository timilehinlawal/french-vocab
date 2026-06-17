import { useMemo, useState } from "react";
import { ChevronDown, Pencil, Plus, Search, X } from "lucide-react";
import { levelOptions, parseCefrLevel, parseVocabularyStatus, statusOptions } from "../lib/options";
import { createVocabularyItem, emptyAddWordForm, findDuplicateVocabulary, getSynonymLadder, hasRequiredAddWordFields } from "../lib/vocabulary";
import type { AddWordForm } from "../lib/vocabulary";
import type { CefrLevel, VocabularyItem } from "../lib/types";
import { PronunciationButton } from "./common";

const LEVELS: ("All" | CefrLevel)[] = ["All", ...levelOptions];
const MAX_VISIBLE = 50;

export function WordsView({
  vocabulary,
  onAddWord,
  onUpdateWord
}: {
  vocabulary: VocabularyItem[];
  onAddWord: (item: VocabularyItem) => void;
  onUpdateWord: (id: string, patch: Partial<VocabularyItem>) => void;
}) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<"All" | CefrLevel>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return vocabulary.filter((word) => {
      const matchesLevel = level === "All" || word.level === level;
      if (!matchesLevel) return false;
      if (!normalized) return true;
      return [word.french, word.meaning, word.level, word.source, ...word.structures].join(" ").toLowerCase().includes(normalized);
    });
  }, [vocabulary, query, level]);

  const visible = filtered.slice(0, MAX_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  return (
    <article className="words-card">
      <div className="words-toolbar">
        <label className="words-search">
          <Search size={16} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="search words, meanings, sources" />
          {query && (
            <button className="words-search-clear" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={14} />
            </button>
          )}
        </label>
        <button className="words-add" onClick={() => setShowAdd(true)}>
          <Plus size={16} />
          add
        </button>
      </div>

      <div className="words-filters">
        {LEVELS.map((option) => (
          <button key={option} className={`size-pill${level === option ? " active" : ""}`} onClick={() => setLevel(option)}>
            {option === "All" ? "all" : option}
          </button>
        ))}
        <span className="words-count">
          {filtered.length} {filtered.length === 1 ? "word" : "words"}
        </span>
      </div>

      <div className="words-list">
        {visible.length === 0 ? (
          <p className="words-empty">no words match “{query}”.</p>
        ) : (
          visible.map((word) => {
            const open = expandedId === word.id;
            const editing = editingId === word.id;
            const synonyms = getSynonymLadder(word);

            return (
              <div className={`word-row${open ? " open" : ""}`} key={word.id}>
                <button className="word-row-head" onClick={() => setExpandedId(open ? null : word.id)}>
                  <span className="word-row-main">
                    <span className="word-fr">{word.french}</span>
                    <span className="word-en">{word.meaning}</span>
                  </span>
                  <span className="word-row-side">
                    <span className="word-level">{word.level}</span>
                    <ChevronDown size={16} className="word-chevron" />
                  </span>
                </button>

                {open && (
                  <div className="word-detail">
                    <span className="word-detail-meta">
                      {word.partOfSpeech} · {word.status.toLowerCase()} · {word.source.toLowerCase()}
                    </span>

                    {word.example && (
                      <p className="word-example">
                        <span className="fr">{word.example}</span>
                        {word.translation && <span className="en">{word.translation}</span>}
                      </p>
                    )}

                    {(word.structures.length > 0 || synonyms.length > 0) && (
                      <div className="word-chips">
                        {word.structures.map((structure) => (
                          <span className="deck-chip" key={`s-${structure}`}>
                            {structure}
                          </span>
                        ))}
                        {synonyms.map((synonym) => (
                          <span className="deck-chip subtle" key={`y-${synonym}`}>
                            {synonym}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="word-detail-actions">
                      <PronunciationButton text={word.french} />
                      <button className="ghost-cta" onClick={() => setEditingId(editing ? null : word.id)}>
                        <Pencil size={14} />
                        {editing ? "done" : "edit"}
                      </button>
                    </div>

                    {editing && (
                      <div className="word-edit">
                        <label>
                          meaning
                          <input value={word.meaning} onChange={(event) => onUpdateWord(word.id, { meaning: event.target.value })} />
                        </label>
                        <label>
                          level
                          <select value={word.level} onChange={(event) => onUpdateWord(word.id, { level: parseCefrLevel(event.target.value, word.level) })}>
                            {levelOptions.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </label>
                        <label>
                          status
                          <select value={word.status} onChange={(event) => onUpdateWord(word.id, { status: parseVocabularyStatus(event.target.value, word.status) })}>
                            {statusOptions.map((option) => (
                              <option key={option}>{option}</option>
                            ))}
                          </select>
                        </label>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })
        )}

        {hiddenCount > 0 && <p className="words-more">+{hiddenCount} more — refine your search to narrow down</p>}
      </div>

      {showAdd && (
        <AddWordOverlay
          vocabulary={vocabulary}
          onClose={() => setShowAdd(false)}
          onAdd={(item) => {
            onAddWord(item);
            setQuery(item.french);
            setLevel("All");
            setShowAdd(false);
          }}
        />
      )}
    </article>
  );
}

function AddWordOverlay({
  vocabulary,
  onAdd,
  onClose
}: {
  vocabulary: VocabularyItem[];
  onAdd: (item: VocabularyItem) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<AddWordForm>(emptyAddWordForm);
  const [error, setError] = useState("");

  const update = <K extends keyof AddWordForm>(key: K, value: AddWordForm[K]) => setForm((current) => ({ ...current, [key]: value }));

  const save = () => {
    if (!hasRequiredAddWordFields(form)) {
      setError("add the french word and its meaning first.");
      return;
    }
    const duplicate = findDuplicateVocabulary(vocabulary, form.french);
    if (duplicate) {
      setError(`“${duplicate.french}” is already in your library.`);
      return;
    }
    onAdd(createVocabularyItem(form, new Date().toISOString()));
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-card" onClick={(event) => event.stopPropagation()}>
        <div className="overlay-head">
          <span className="overlay-title">add a word</span>
          <button className="icon-action compact" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        <div className="overlay-grid">
          <label className="field wide">
            french word
            <input autoFocus value={form.french} onChange={(event) => update("french", event.target.value)} placeholder="ex. remettre en cause" />
          </label>
          <label className="field wide">
            meaning
            <input value={form.meaning} onChange={(event) => update("meaning", event.target.value)} placeholder="ex. to call into question" />
          </label>
          <label className="field">
            level
            <select value={form.level} onChange={(event) => update("level", parseCefrLevel(event.target.value, form.level))}>
              {levelOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="field">
            source
            <input value={form.source} onChange={(event) => update("source", event.target.value)} placeholder="manual entry" />
          </label>
          <label className="field wide">
            example sentence
            <input value={form.example} onChange={(event) => update("example", event.target.value)} placeholder="optional — auto-filled if blank" />
          </label>
          <label className="field wide">
            english translation
            <input value={form.translation} onChange={(event) => update("translation", event.target.value)} placeholder="optional" />
          </label>
          <label className="field wide">
            structures
            <input value={form.structures} onChange={(event) => update("structures", event.target.value)} placeholder="comma separated, optional" />
          </label>
        </div>

        {error && <p className="overlay-error">{error}</p>}

        <div className="overlay-actions">
          <button className="ghost-cta" onClick={onClose}>
            cancel
          </button>
          <button className="hero-cta" onClick={save} disabled={!hasRequiredAddWordFields(form)}>
            save word
          </button>
        </div>
      </div>
    </div>
  );
}
