import { useEffect, useMemo, useRef, useState } from "react";
import type { UIEvent } from "react";
import { ArrowLeft, ChevronDown, Pencil, PenLine, Plus, Search, Trash2, Upload, X } from "lucide-react";
import { levelOptions, parseCefrLevel, parseVocabularyStatus, statusOptions } from "../lib/options";
import { createVocabularyItem, emptyAddWordForm, exampleTranslation, findDuplicateVocabulary, hasRequiredAddWordFields } from "../lib/vocabulary";
import { entriesToItems, importFile } from "../lib/importVocabulary";
import {
  fetchEnglishWordSuggestions,
  fetchFrenchSuggestions,
  fetchTranslations,
  localFrenchSuggestions,
  localMeaningSuggestions,
  localTranslations,
  mergeSuggestions
} from "../lib/suggestions";
import type { ParsedEntry } from "../lib/importVocabulary";
import type { AddWordForm } from "../lib/vocabulary";
import type { CefrLevel, VocabularyItem } from "../lib/types";
import { PronunciationButton } from "./common";

const LEVELS: ("All" | CefrLevel)[] = ["All", ...levelOptions];
const BATCH = 40;
const SUGGESTION_IDLE_MS = 1000;

export function WordsView({
  vocabulary,
  onAddWords,
  onUpdateWord,
  onDeleteWord,
  onAddOpenChange
}: {
  vocabulary: VocabularyItem[];
  onAddWords: (items: VocabularyItem[]) => void;
  onUpdateWord: (id: string, patch: Partial<VocabularyItem>) => void;
  onDeleteWord: (id: string) => void;
  onAddOpenChange?: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<"All" | CefrLevel>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [visibleCount, setVisibleCount] = useState(BATCH);

  const openAdd = () => {
    onAddOpenChange?.(true);
    setShowAdd(true);
  };
  const closeAdd = () => {
    onAddOpenChange?.(false);
    setShowAdd(false);
  };

  useEffect(() => () => onAddOpenChange?.(false), [onAddOpenChange]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return vocabulary.filter((word) => {
      const matchesLevel = level === "All" || word.level === level;
      if (!matchesLevel) return false;
      if (!normalized) return true;
      return [word.french, word.meaning, word.level, word.source, ...word.structures].join(" ").toLowerCase().includes(normalized);
    });
  }, [vocabulary, query, level]);

  // Reset the window whenever the result set changes (new search/filter).
  useEffect(() => setVisibleCount(BATCH), [query, level]);

  const visible = filtered.slice(0, visibleCount);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    if (el.scrollHeight - el.scrollTop - el.clientHeight < 280 && visibleCount < filtered.length) {
      setVisibleCount((count) => Math.min(count + BATCH, filtered.length));
    }
  };

  if (showAdd) {
    return (
      <AddWordOverlay
        vocabulary={vocabulary}
        initialFrench={query.trim()}
        onClose={closeAdd}
        onCommit={(items, focusQuery) => {
          onAddWords(items);
          setQuery(focusQuery ?? "");
          setLevel("All");
          closeAdd();
        }}
      />
    );
  }

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
        <button className="words-add" onClick={openAdd}>
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

      <div className="words-list" onScroll={handleScroll}>
        {visible.length === 0 ? (
          <p className="words-empty">no words match “{query}”.</p>
        ) : (
          visible.map((word) => {
            const open = expandedId === word.id;
            const editing = editingId === word.id;
            const translation = exampleTranslation(word);

            return (
              <div className={`word-row${open ? " open" : ""}`} key={word.id}>
                <button
                  className="word-row-head"
                  onClick={() => {
                    setExpandedId(open ? null : word.id);
                    setConfirmDeleteId(null);
                  }}
                >
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
                      {word.partOfSpeech} · {word.status.toLowerCase()}
                    </span>

                    {word.example && (
                      <p className="word-example">
                        <span className="fr">{word.example}</span>
                        {translation && <span className="en">{translation}</span>}
                      </p>
                    )}

                    <div className="word-detail-actions">
                      <PronunciationButton text={word.french} />
                      <button className="ghost-cta" onClick={() => setEditingId(editing ? null : word.id)}>
                        <Pencil size={14} />
                        {editing ? "done" : "edit"}
                      </button>
                      <button
                        className={`icon-action word-delete${confirmDeleteId === word.id ? " danger" : ""}`}
                        onClick={() => {
                          if (confirmDeleteId === word.id) {
                            onDeleteWord(word.id);
                            setExpandedId(null);
                            setEditingId(null);
                            setConfirmDeleteId(null);
                            return;
                          }
                          setConfirmDeleteId(word.id);
                        }}
                        title={confirmDeleteId === word.id ? "click again to delete" : "delete"}
                        aria-label={confirmDeleteId === word.id ? `Confirm delete ${word.french}` : `Delete ${word.french}`}
                      >
                        <Trash2 size={15} />
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

      </div>

      {showAdd && (
        <AddWordOverlay
          vocabulary={vocabulary}
          initialFrench={query.trim()}
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
  initialFrench = "",
  onCommit,
  onClose
}: {
  vocabulary: VocabularyItem[];
  initialFrench?: string;
  onCommit: (items: VocabularyItem[], focusQuery?: string) => void;
  onClose: () => void;
}) {
  const [step, setStep] = useState<AddStep>(initialFrench ? "manual" : "choose");
  const title = step === "choose" ? "add words" : step === "manual" ? "add a word" : "import words";

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <article className="words-card add-card">
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

      {step === "manual" && (
        <ManualStep vocabulary={vocabulary} initialFrench={initialFrench} onClose={onClose} onCommit={onCommit} />
      )}
      {step === "import" && <ImportStep vocabulary={vocabulary} onClose={onClose} onCommit={onCommit} />}
    </article>
  );
}

function SuggestionList({ items, onPick }: { items: string[]; onPick: (value: string) => void }) {
  if (items.length === 0) return null;

  return (
    <ul className="suggest-list" role="listbox">
      {items.map((item) => (
        <li key={item}>
          <button
            type="button"
            className="suggest-item"
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => onPick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ManualStep({
  vocabulary,
  initialFrench = "",
  onCommit,
  onClose
}: {
  vocabulary: VocabularyItem[];
  initialFrench?: string;
  onCommit: (items: VocabularyItem[], focusQuery?: string) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState<AddWordForm>({ ...emptyAddWordForm, french: initialFrench });
  const [error, setError] = useState("");
  const [frenchFocused, setFrenchFocused] = useState(true);
  const [meaningFocused, setMeaningFocused] = useState(false);
  const [meaningTyping, setMeaningTyping] = useState(false);
  const [frenchSuggestions, setFrenchSuggestions] = useState<string[]>([]);
  const [meaningSuggestions, setMeaningSuggestions] = useState<string[]>([]);
  const frenchInputRef = useRef<HTMLInputElement>(null);

  const update = <K extends keyof AddWordForm>(key: K, value: AddWordForm[K]) => setForm((current) => ({ ...current, [key]: value }));

  useEffect(() => {
    const input = frenchInputRef.current;
    if (!input) return;
    input.focus();
    const cursor = input.value.length;
    input.setSelectionRange(cursor, cursor);
  }, []);

  useEffect(() => {
    const query = form.french.trim();
    setFrenchSuggestions([]);
    if (query.length < 2) return;

    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      const local = localFrenchSuggestions(vocabulary, query);
      void fetchFrenchSuggestions(query, controller.signal)
        .then((remote) => mergeSuggestions(local, remote))
        .catch(() => local)
        .then((items) => {
          if (controller.signal.aborted) return;
          setFrenchSuggestions(items);
        });
    }, SUGGESTION_IDLE_MS);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [form.french, vocabulary]);

  useEffect(() => {
    if (!meaningFocused) {
      setMeaningSuggestions([]);
      return;
    }

    const meaningQuery = form.meaning.trim();
    const french = form.french.trim();
    const showWordSuggestions = meaningTyping && meaningQuery.length >= 2;
    if (!showWordSuggestions && !french) {
      setMeaningSuggestions([]);
      return;
    }

    setMeaningSuggestions([]);
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      const translations = localTranslations(vocabulary, french);
      const typed = showWordSuggestions ? localMeaningSuggestions(vocabulary, meaningQuery) : [];
      const local = showWordSuggestions
        ? mergeSuggestions(typed, translations.filter((item) => item.toLowerCase().includes(meaningQuery.toLowerCase())))
        : translations;

      const remote = showWordSuggestions
        ? fetchEnglishWordSuggestions(meaningQuery, controller.signal)
        : fetchTranslations(french, controller.signal);

      void remote
        .then((items) => mergeSuggestions(local, items))
        .catch(() => local)
        .then((items) => {
          if (controller.signal.aborted) return;
          setMeaningSuggestions(items);
        });
    }, SUGGESTION_IDLE_MS);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [form.french, form.meaning, meaningFocused, meaningTyping, vocabulary]);

  const pickFrench = (value: string) => {
    const match = vocabulary.find((word) => word.french === value);
    setForm((current) => ({
      ...current,
      french: value,
      meaning: current.meaning.trim() ? current.meaning : match?.meaning ?? current.meaning
    }));
  };

  const pickMeaning = (value: string) => {
    update("meaning", value);
    setMeaningTyping(false);
  };

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
        <div className="field wide">
          french word
          <input
            ref={frenchInputRef}
            autoFocus
            value={form.french}
            onChange={(event) => update("french", event.target.value)}
            onFocus={() => setFrenchFocused(true)}
            onBlur={() => setFrenchFocused(false)}
            placeholder="ex. remettre en cause"
            autoComplete="off"
          />
          {frenchFocused && <SuggestionList items={frenchSuggestions} onPick={pickFrench} />}
        </div>
        <div className="field wide">
          meaning
          <input
            value={form.meaning}
            onChange={(event) => {
              setMeaningTyping(true);
              update("meaning", event.target.value);
            }}
            onFocus={() => {
              setMeaningTyping(false);
              setMeaningFocused(true);
            }}
            onBlur={() => setMeaningFocused(false)}
            placeholder="ex. to call into question"
            autoComplete="off"
          />
          {meaningFocused && <SuggestionList items={meaningSuggestions} onPick={pickMeaning} />}
        </div>
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

      <div className="import-hint">
        <p>each line should include the french word & its meaning.</p>
        <p>separate with a comma, dash, tab, or colon. a table works too.</p>
        <p>optional — add the word in a sentence with its translation</p>
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
