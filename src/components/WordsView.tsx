import { useMemo, useRef, useState } from "react";
import { ArrowLeft, ChevronDown, Pencil, PenLine, Plus, Search, Upload, X } from "lucide-react";
import { levelOptions, parseCefrLevel, parseVocabularyStatus, statusOptions } from "../lib/options";
import { createVocabularyItem, emptyAddWordForm, findDuplicateVocabulary, getSynonymLadder, hasRequiredAddWordFields } from "../lib/vocabulary";
import { entriesToItems, importFile } from "../lib/importVocabulary";
import type { ParsedEntry } from "../lib/importVocabulary";
import type { AddWordForm } from "../lib/vocabulary";
import type { CefrLevel, VocabularyItem } from "../lib/types";
import { PronunciationButton } from "./common";

const LEVELS: ("All" | CefrLevel)[] = ["All", ...levelOptions];
const MAX_VISIBLE = 50;

export function WordsView({
  vocabulary,
  onAddWords,
  onUpdateWord
}: {
  vocabulary: VocabularyItem[];
  onAddWords: (items: VocabularyItem[]) => void;
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
          onCommit={(items, focusQuery) => {
            onAddWords(items);
            setQuery(focusQuery ?? "");
            setLevel("All");
            setShowAdd(false);
          }}
        />
      )}
    </article>
  );
}

type AddStep = "choose" | "manual" | "import";

function AddWordOverlay({
  vocabulary,
  onCommit,
  onClose
}: {
  vocabulary: VocabularyItem[];
  onCommit: (items: VocabularyItem[], focusQuery?: string) => void;
  onClose: () => void;
}) {
  const [step, setStep] = useState<AddStep>("choose");
  const title = step === "choose" ? "add words" : step === "manual" ? "add a word" : "import words";

  return (
    <div className="overlay" onClick={onClose}>
      <div className="overlay-card" onClick={(event) => event.stopPropagation()}>
        <div className="overlay-head">
          <span className="overlay-title">
            {step !== "choose" && (
              <button className="overlay-back" onClick={() => setStep("choose")} aria-label="Back">
                <ArrowLeft size={16} />
              </button>
            )}
            {title}
          </span>
          <button className="icon-action compact" onClick={onClose} aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {step === "choose" && (
          <div className="overlay-choices">
            <button className="choice-card" onClick={() => setStep("manual")}>
              <PenLine size={22} />
              <strong>manual</strong>
              <span>type a single word and its meaning.</span>
            </button>
            <button className="choice-card" onClick={() => setStep("import")}>
              <Upload size={22} />
              <strong>import</strong>
              <span>scrape words from a .docx, .csv, or .txt file.</span>
            </button>
          </div>
        )}

        {step === "manual" && <ManualStep vocabulary={vocabulary} onClose={onClose} onCommit={onCommit} />}
        {step === "import" && <ImportStep vocabulary={vocabulary} onClose={onClose} onCommit={onCommit} />}
      </div>
    </div>
  );
}

function ManualStep({
  vocabulary,
  onCommit,
  onClose
}: {
  vocabulary: VocabularyItem[];
  onCommit: (items: VocabularyItem[], focusQuery?: string) => void;
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
    const item = createVocabularyItem(form, new Date().toISOString());
    onCommit([item], item.french);
  };

  return (
    <>
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
    </>
  );
}

function ImportStep({
  vocabulary,
  onCommit,
  onClose
}: {
  vocabulary: VocabularyItem[];
  onCommit: (items: VocabularyItem[], focusQuery?: string) => void;
  onClose: () => void;
}) {
  const [entries, setEntries] = useState<ParsedEntry[]>([]);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = async (file?: File | null) => {
    if (!file) return;
    setBusy(true);
    setError("");
    setFileName(file.name);
    try {
      const parsed = await importFile(file);
      setEntries(parsed);
      if (parsed.length === 0) {
        setError("couldn't find word/meaning pairs — try a 2-column table or “word, meaning” per line.");
      }
    } catch {
      setError("could not read that file.");
      setEntries([]);
    }
    setBusy(false);
  };

  const novel = entries.filter((entry) => !findDuplicateVocabulary(vocabulary, entry.french));
  const duplicates = entries.length - novel.length;

  const runImport = () => {
    if (novel.length === 0) return;
    onCommit(entriesToItems(novel, fileName || "Imported file", new Date().toISOString()));
  };

  return (
    <>
      <div
        className={`import-zone${drag ? " drag" : ""}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(event) => {
          event.preventDefault();
          setDrag(false);
          handleFile(event.dataTransfer.files?.[0]);
        }}
      >
        <Upload size={20} />
        <strong>{fileName || "drop a file or click to browse"}</strong>
        <span>.docx · .csv · .tsv · .txt · .md</span>
        <input
          ref={inputRef}
          type="file"
          accept=".docx,.csv,.tsv,.txt,.md,text/plain"
          hidden
          onChange={(event) => handleFile(event.target.files?.[0])}
        />
      </div>

      {busy && <p className="overlay-busy">reading {fileName}…</p>}
      {error && <p className="overlay-error">{error}</p>}

      {entries.length > 0 && (
        <div className="import-preview">
          <div className="import-summary">
            <strong>
              {novel.length} new {novel.length === 1 ? "word" : "words"}
            </strong>
            {duplicates > 0 && <span>{duplicates} already in library</span>}
          </div>
          <div className="import-rows">
            {novel.slice(0, 8).map((entry, index) => (
              <div className="import-row" key={`${entry.french}-${index}`}>
                <span className="fr">{entry.french}</span>
                <span className="en">{entry.meaning}</span>
              </div>
            ))}
            {novel.length > 8 && <p className="import-more">+{novel.length - 8} more</p>}
          </div>
        </div>
      )}

      <div className="overlay-actions">
        <button className="ghost-cta" onClick={onClose}>
          cancel
        </button>
        <button className="hero-cta" onClick={runImport} disabled={novel.length === 0}>
          import{novel.length ? ` ${novel.length}` : ""} {novel.length === 1 ? "word" : "words"}
        </button>
      </div>
    </>
  );
}
