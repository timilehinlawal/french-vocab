import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { ChevronRight, Volume2 } from "lucide-react";
import { getPracticeCount, getPracticeMax } from "../lib/practice";
import type { PracticeSize } from "../lib/types";

type PracticeSizeStyle = CSSProperties & { "--practice-fill": string };

export function NavButton({ active, icon, label, onClick }: { active: boolean; icon: ReactNode; label: string; onClick: () => void }) {
  return (
    <button className={`nav-button ${active ? "active" : ""}`} onClick={onClick} title={label}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function PronunciationButton({ label = "Play pronunciation", text }: { label?: string; text: string }) {
  const speak = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const frenchVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("fr"));
    utterance.lang = frenchVoice?.lang ?? "fr-FR";
    utterance.voice = frenchVoice ?? null;
    utterance.rate = 0.86;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      className="icon-action pronunciation-action"
      onClick={speak}
      onKeyDown={(event) => event.stopPropagation()}
      title={label}
      aria-label={`${label}: ${text}`}
    >
      <Volume2 size={17} />
    </button>
  );
}

export function PracticeSizeControl({
  dueCount,
  practiceSize,
  onChange
}: {
  dueCount: number;
  practiceSize: PracticeSize;
  onChange: (value: PracticeSize) => void;
}) {
  const max = getPracticeMax(dueCount);
  const selectedCount = getPracticeCount(practiceSize, dueCount);
  const fill = max <= 1 ? 100 : ((selectedCount - 1) / (max - 1)) * 100;
  const style: PracticeSizeStyle = { "--practice-fill": `${fill}%` };

  return (
    <label className="practice-size-control" style={style}>
      <span className="practice-size-label">Session size</span>
      <span className="practice-size-value">{selectedCount} words</span>
      <input
        aria-label="Session size"
        max={max}
        min={1}
        onChange={(event) => onChange(Number(event.target.value))}
        onInput={(event) => onChange(Number(event.currentTarget.value))}
        type="range"
        value={selectedCount}
      />
      <span className="practice-size-scale">
        <span>1</span>
        <span>{max}</span>
      </span>
    </label>
  );
}

export function Metric({ icon, label, value, detail }: { icon: ReactNode; label: string; value: string; detail: string }) {
  return (
    <article className="metric-card">
      <div className="metric-icon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </article>
  );
}

export function Panel({ title, action, onAction, children }: { title: string; action?: string; onAction?: () => void; children: ReactNode }) {
  return (
    <section className="panel">
      <div className="panel-header">
        <h2>{title}</h2>
        {action && (
          <button onClick={onAction}>
            {action}
            <ChevronRight size={16} />
          </button>
        )}
      </div>
      {children}
    </section>
  );
}

export function StatusBars({ rows, total }: { rows: { label: string; count: number }[]; total: number }) {
  const getWidth = (count: number) => {
    if (total <= 0 || count <= 0) return 0;

    return Math.max(4, (count / total) * 100);
  };

  return (
    <div className="status-bars">
      {rows.map((row) => (
        <div className="status-row" key={row.label}>
          <div className="status-label">
            <span>{row.label}</span>
            <strong>{row.count}</strong>
          </div>
          <div className="bar-track">
            <div style={{ width: `${getWidth(row.count)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}
