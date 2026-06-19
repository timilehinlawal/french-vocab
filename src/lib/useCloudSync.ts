import { useEffect, useRef, useState } from "react";
import type { User } from "firebase/auth";
import { loadCloudState, saveCloudState, type CloudState } from "./cloudSync";
import { loadUpdatedAt, saveUpdatedAt } from "./storage";
import type { PracticeSize, ReviewAttempt, VocabularyItem } from "./types";

export type SyncStatus = "idle" | "syncing" | "ready" | "error";

interface Params {
  user: User | null;
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  practiceSize: PracticeSize;
  setVocabulary: (items: VocabularyItem[]) => void;
  setAttempts: (attempts: ReviewAttempt[]) => void;
  setPracticeSize: (size: PracticeSize) => void;
}

const WRITE_DEBOUNCE_MS = 1200;
const serialize = (state: CloudState) => JSON.stringify(state);

/**
 * Keeps app state in sync with the signed-in user's Firestore record using a
 * "newest wins" model:
 *   - First sign-in with an empty cloud record → push local data up once.
 *   - On later loads, the local and cloud copies are compared by their last
 *     update time; the fresher one is kept. This stops a stale cloud copy (e.g.
 *     when a debounced write was cancelled by a quick refresh/close) from
 *     resurrecting progress the user already made locally.
 * After the initial sync, local changes are stamped immediately and debounced
 * back up to the cloud.
 */
export function useCloudSync({
  user,
  vocabulary,
  attempts,
  practiceSize,
  setVocabulary,
  setAttempts,
  setPracticeSize
}: Params): SyncStatus {
  const [status, setStatus] = useState<SyncStatus>("idle");

  // Latest state, so the initial-sync effect can seed the cloud with whatever
  // local data exists at sign-in without re-running on every keystroke.
  const stateRef = useRef<CloudState>({ vocabulary, attempts, practiceSize });
  stateRef.current = { vocabulary, attempts, practiceSize };

  // The last payload we read from / wrote to the cloud — used to skip redundant
  // writes (including the echo from applying freshly-loaded cloud data).
  const lastSyncedRef = useRef<string | null>(null);
  const writeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const uid = user?.uid ?? null;

  // Initial sync whenever the signed-in user changes.
  useEffect(() => {
    if (!uid) {
      setStatus("idle");
      lastSyncedRef.current = null;
      return;
    }

    let cancelled = false;
    setStatus("syncing");

    (async () => {
      try {
        const cloud = await loadCloudState(uid);
        if (cancelled) return;

        const localUpdatedAt = loadUpdatedAt();
        const localTs = localUpdatedAt ? Date.parse(localUpdatedAt) : 0;

        if (cloud) {
          const cloudTs = cloud.updatedAt ? Date.parse(cloud.updatedAt) : 0;

          if (localTs > cloudTs) {
            // Local has unsynced changes that are newer than the cloud copy —
            // keep them and push up, so a lost write can't undo recent progress.
            const local = stateRef.current;
            lastSyncedRef.current = serialize(local);
            await saveCloudState(uid, local, localUpdatedAt ?? new Date().toISOString());
          } else {
            // Cloud is at least as fresh: adopt it as the source of truth.
            const cloudState: CloudState = {
              vocabulary: cloud.vocabulary,
              attempts: cloud.attempts,
              practiceSize: cloud.practiceSize
            };
            lastSyncedRef.current = serialize(cloudState);
            setVocabulary(cloud.vocabulary);
            setAttempts(cloud.attempts);
            setPracticeSize(cloud.practiceSize);
            saveUpdatedAt(cloud.updatedAt ?? new Date().toISOString());
          }
        } else {
          // First sync: seed the cloud with this device's local data.
          const local = stateRef.current;
          const updatedAt = localUpdatedAt ?? new Date().toISOString();
          lastSyncedRef.current = serialize(local);
          saveUpdatedAt(updatedAt);
          await saveCloudState(uid, local, updatedAt);
        }
        if (!cancelled) setStatus("ready");
      } catch {
        if (!cancelled) setStatus("error");
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  // Push local changes up once the initial sync is complete.
  useEffect(() => {
    if (!uid || status !== "ready") return;

    const payload = serialize({ vocabulary, attempts, practiceSize });
    if (payload === lastSyncedRef.current) return;
    lastSyncedRef.current = payload;

    // Stamp the local update time synchronously, before the debounced write. If
    // the write is cancelled by a refresh/close, the next load still sees that
    // local is newer than the cloud and keeps (then re-pushes) this progress.
    const updatedAt = new Date().toISOString();
    saveUpdatedAt(updatedAt);

    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      saveCloudState(uid, { vocabulary, attempts, practiceSize }, updatedAt).catch(() => {
        // Leave lastSyncedRef as-is; a later change will retry the write.
      });
    }, WRITE_DEBOUNCE_MS);

    return () => {
      if (writeTimer.current) clearTimeout(writeTimer.current);
    };
  }, [uid, status, vocabulary, attempts, practiceSize]);

  return status;
}
