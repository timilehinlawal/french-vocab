import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { PracticeSize, ReviewAttempt, VocabularyItem } from "./types";

// The slice of app state we persist per user. Theme stays device-local; imports
// are derived from seeds and never mutated, so neither is synced.
export interface CloudState {
  vocabulary: VocabularyItem[];
  attempts: ReviewAttempt[];
  practiceSize: PracticeSize;
}

export interface CloudDocument extends CloudState {
  updatedAt: string;
}

// A cloud read carries the server-recorded update time so callers can compare it
// against the local copy and keep whichever is newer.
export interface LoadedCloudState extends CloudState {
  updatedAt: string | null;
}

const userDoc = (uid: string) => {
  if (!db) throw new Error("Firestore is not configured");
  return doc(db, "users", uid);
};

// Firestore rejects any field whose value is `undefined`, and several vocabulary
// fields are optional. Round-tripping through JSON drops undefined keys cleanly.
const stripUndefined = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

/** Read a user's saved progress. Returns null when they have no cloud record yet. */
export const loadCloudState = async (uid: string): Promise<LoadedCloudState | null> => {
  const snapshot = await getDoc(userDoc(uid));
  if (!snapshot.exists()) return null;

  const data = snapshot.data() as Partial<CloudDocument>;
  // An empty/partial doc counts as "no data" so a first sync can seed it.
  if (!Array.isArray(data.vocabulary)) return null;

  return {
    vocabulary: data.vocabulary,
    attempts: Array.isArray(data.attempts) ? data.attempts : [],
    practiceSize: typeof data.practiceSize === "number" ? data.practiceSize : 10,
    updatedAt: typeof data.updatedAt === "string" ? data.updatedAt : null
  };
};

/** Write a user's progress, stamping the server-side update time. */
export const saveCloudState = async (uid: string, state: CloudState, updatedAt: string): Promise<void> => {
  await setDoc(userDoc(uid), stripUndefined({ ...state, updatedAt }));
};
