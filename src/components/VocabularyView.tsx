import { CheckCircle2, ListFilter, Pencil, Plus, Save, Search, Sparkles } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { levelOptions, parseCefrLevel, parsePriority, parseVocabularyStatus, priorityOptions, statusOptions } from "../lib/options";
import { isRepairWord } from "../lib/review";
import { wordQuality, hasRequiredAddWordFields } from "../lib/vocabulary";
import type { AddWordForm } from "../lib/vocabulary";
import type { CefrLevel, VocabularyItem } from "../lib/types";
import { LearningTools } from "./LearningTools";
import { PronunciationButton } from "./common";

export function VocabularyView({
  addVocabularyWord,
  addWordError,
  addWordForm,
  applySuggestedSetup,
  editingId,
  filteredVocabulary,
  levelFilter,
  levels,
  query,
  setEditingId,
  setAddWordForm,
  setLevelFilter,
  setShowAddWord,
  setQuery,
  showAddWord,
  updateWord
}: {
  addVocabularyWord: () => void;
  addWordError: string;
  addWordForm: AddWordForm;
  applySuggestedSetup: () => void;
  editingId: string | null;
  filteredVocabulary: VocabularyItem[];
  levelFilter: "All" | CefrLevel;
  levels: readonly ("All" | CefrLevel)[];
  query: string;
  setEditingId: (value: string | null) => void;
  setAddWordForm: Dispatch<SetStateAction<AddWordForm>>;
  setLevelFilter: (value: "All" | CefrLevel) => void;
  setShowAddWord: (value: boolean) => void;
  setQuery: (value: string) => void;
  showAddWord: boolean;
  updateWord: (id: string, patch: Partial<VocabularyItem>) => void;
}) {
  return (
    <section className="view-stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Knowledge base</span>
          <h1>Vocabulary</h1>
        </div>
        <button className="primary-action" onClick={() => setShowAddWord(true)}>
          <Plus size={18} />
          Add word
        </button>
      </div>

      {showAddWord && (
        <AddWordPanel
          error={addWordError}
          form={addWordForm}
          onApplySuggestedSetup={applySuggestedSetup}
          onCancel={() => setShowAddWord(false)}
          onChange={setAddWordForm}
          onSave={addVocabularyWord}
        />
      )}

      <div className="toolbar">
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search words, levels, sources" />
        </label>
        <label className="select-box">
          <ListFilter size={18} />
          <select value={levelFilter} onChange={(event) => setLevelFilter(event.target.value === "All" ? "All" : parseCefrLevel(event.target.value, "Unknown"))}>
            {levels.map((level) => (
              <option key={level}>{level === "All" ? "All levels" : level}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="result-strip">
        <span>{filteredVocabulary.length} shown</span>
        <strong>{levelFilter === "All" ? "All levels" : levelFilter}</strong>
      </div>

      <div className="vocab-list">
        {filteredVocabulary.map((word) => {
          const isEditing = editingId === word.id;
          const quality = wordQuality(word);

          return (
            <article className="vocab-card" key={word.id}>
              <div className="vocab-main">
                <div className="vocab-body">
                  <span className="vocab-meta">{word.level} / {word.partOfSpeech}</span>
                  <h3>{word.french}</h3>
                  <p className="vocab-definition">{word.meaning}</p>
                  <small>{word.example}</small>
                </div>
                <div className="word-actions">
                  <PronunciationButton text={word.french} />
                  <button className="icon-action compact" onClick={() => setEditingId(isEditing ? null : word.id)} title="Edit word">
                    <Pencil size={16} />
                  </button>
                </div>
              </div>
              <div className="tag-row">
                <span className="pill">{word.status}</span>
                <span className="pill">{word.level}</span>
                <span className={`pill ${quality.tone}`}>{quality.label}</span>
                {isRepairWord(word) && <span className="pill danger">Repair queue</span>}
                <span className="pill">{word.source}</span>
              </div>
              <LearningTools word={word} compact />
              {isEditing && (
                <div className="edit-grid">
                  <label>
                    Meaning
                    <input value={word.meaning} onChange={(event) => updateWord(word.id, { meaning: event.target.value })} />
                  </label>
                  <label>
                    Level
                    <select value={word.level} onChange={(event) => updateWord(word.id, { level: parseCefrLevel(event.target.value, word.level) })}>
                      {levelOptions.map((level) => <option key={level}>{level}</option>)}
                    </select>
                  </label>
                  <label>
                    Status
                    <select value={word.status} onChange={(event) => updateWord(word.id, { status: parseVocabularyStatus(event.target.value, word.status) })}>
                      {statusOptions.map((status) => <option key={status}>{status}</option>)}
                    </select>
                  </label>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function AddWordPanel({
  error,
  form,
  onApplySuggestedSetup,
  onCancel,
  onChange,
  onSave
}: {
  error: string;
  form: AddWordForm;
  onApplySuggestedSetup: () => void;
  onCancel: () => void;
  onChange: Dispatch<SetStateAction<AddWordForm>>;
  onSave: () => void;
}) {
  const setupChecks = [
    { label: "Term captured", done: form.french.trim().length > 0 },
    { label: "Meaning confirmed", done: form.meaning.trim().length > 0 },
    { label: "Example prepared", done: form.example.trim().length > 0 && form.translation.trim().length > 0 },
    { label: "Source tracked", done: form.source.trim().length > 0 }
  ];
  const update = <K extends keyof AddWordForm>(key: K, value: AddWordForm[K]) => {
    onChange((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="add-word-panel" aria-label="Add vocabulary word">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Confirm setup</span>
          <h2>Add a new word</h2>
        </div>
        <button onClick={onApplySuggestedSetup}>
          <Sparkles size={16} />
          Suggest setup
        </button>
      </div>

      <div className="setup-checklist">
        {setupChecks.map((check) => (
          <span className={check.done ? "check done" : "check"} key={check.label}>
            <CheckCircle2 size={14} />
            {check.label}
          </span>
        ))}
      </div>

      <div className="add-word-grid">
        <label className="field wide">
          French word or expression
          <input value={form.french} onChange={(event) => update("french", event.target.value)} placeholder="ex. remettre en cause" />
        </label>
        <label className="field wide">
          Confirmed meaning
          <input value={form.meaning} onChange={(event) => update("meaning", event.target.value)} placeholder="ex. to call into question" />
        </label>
        <label className="field">
          Level
          <select value={form.level} onChange={(event) => update("level", parseCefrLevel(event.target.value, form.level))}>
            {levelOptions.map((level) => (
              <option key={level}>{level}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Part of speech
          <input value={form.partOfSpeech} onChange={(event) => update("partOfSpeech", event.target.value)} />
        </label>
        <label className="field">
          TCF priority
          <select value={form.tcfPriority} onChange={(event) => update("tcfPriority", parsePriority(event.target.value, form.tcfPriority))}>
            {priorityOptions.map((priority) => (
              <option key={priority}>{priority}</option>
            ))}
          </select>
        </label>
        <label className="field wide">
          Example sentence
          <input value={form.example} onChange={(event) => update("example", event.target.value)} placeholder="French example sentence" />
        </label>
        <label className="field wide">
          English translation
          <input value={form.translation} onChange={(event) => update("translation", event.target.value)} placeholder="Example translation" />
        </label>
        <label className="field">
          Structures
          <input value={form.structures} onChange={(event) => update("structures", event.target.value)} placeholder="comma separated" />
        </label>
        <label className="field">
          Synonyms
          <input value={form.synonymLadder} onChange={(event) => update("synonymLadder", event.target.value)} placeholder="encourager, promouvoir..." />
        </label>
        <label className="field">
          Word family
          <input value={form.wordFamily} onChange={(event) => update("wordFamily", event.target.value)} placeholder="noun, verb, adjective..." />
        </label>
        <label className="field">
          Tags
          <input value={form.tags} onChange={(event) => update("tags", event.target.value)} placeholder="comma separated" />
        </label>
        <label className="field wide">
          Source
          <input value={form.source} onChange={(event) => update("source", event.target.value)} placeholder="Manual entry, textbook, notes..." />
        </label>
      </div>

      <div className="confirmation-strip">
        <CheckCircle2 size={18} />
        <span>New words are saved as New, due immediately, source-tracked, and marked as meaning confirmed.</span>
      </div>

      {error && <div className="form-error">{error}</div>}

      <div className="form-actions">
        <button className="secondary-action" onClick={onCancel}>Cancel</button>
        <button className="primary-action" disabled={!hasRequiredAddWordFields(form)} onClick={onSave}>
          <Save size={18} />
          Save word
        </button>
      </div>
    </section>
  );
}
