import { useCallback, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut, type User } from "firebase/auth";
import { auth, firebaseEnabled, googleProvider } from "./firebase";

export interface AuthState {
  /** The signed-in user, or null when signed out. */
  user: User | null;
  /** True until the initial auth state resolves. */
  loading: boolean;
  /** True when Firebase is configured; false runs the app in local-only mode. */
  enabled: boolean;
  /** Most recent sign-in error message, if any. */
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(firebaseEnabled);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!firebaseEnabled || !auth) return;
    return onAuthStateChanged(auth, (next) => {
      setUser(next);
      setLoading(false);
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    if (!firebaseEnabled || !auth) return;
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      const code = (err as { code?: string }).code;
      // A user closing the popup isn't a real error worth surfacing.
      if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
      setError("Sign-in failed. Please try again.");
    }
  }, []);

  const signOutUser = useCallback(async () => {
    if (!firebaseEnabled || !auth) return;
    await signOut(auth);
  }, []);

  return { user, loading, enabled: firebaseEnabled, error, signInWithGoogle, signOutUser };
}
