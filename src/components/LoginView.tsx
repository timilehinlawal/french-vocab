import { useState } from "react";
import { Cloud, Smartphone } from "lucide-react";

interface LoginViewProps {
  onGoogle: () => Promise<void>;
  onGuest: () => void;
  error: string | null;
}

// The Google "G" — the official four-color mark, inlined so it keeps its colors
// against any theme background.
function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.583-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"
      />
    </svg>
  );
}

export function LoginView({ onGoogle, onGuest, error }: LoginViewProps) {
  const [busy, setBusy] = useState(false);

  const handleGoogle = async () => {
    setBusy(true);
    try {
      await onGoogle();
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="app auth-app">
      <div className="ambient" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <main className="stage">
        <div className="auth-card">
          <span className="brand-mark auth-mark" aria-hidden="true">fr</span>

          <div className="auth-heading">
            <h1 className="auth-title">french vocab</h1>
            <p className="auth-subtitle">
              Sign in to save your words, streaks, and review history — and pick up
              right where you left off on any device.
            </p>
          </div>

          <button className="auth-google" onClick={handleGoogle} disabled={busy}>
            <GoogleMark />
            <span>{busy ? "Signing in…" : "Continue with Google"}</span>
          </button>

          {error && <p className="auth-error">{error}</p>}

          <div className="auth-perks">
            <span className="auth-perk">
              <Cloud size={13} /> progress synced to the cloud
            </span>
            <span className="auth-perk">
              <Smartphone size={13} /> works across all your devices
            </span>
          </div>

          <button className="auth-guest" onClick={onGuest}>
            continue without an account
          </button>
        </div>
      </main>

      <footer className="footer-note">
        Built with <span className="footer-heart">♥</span> by{" "}
        <a href="https://www.timilawal.com" target="_blank" rel="noreferrer">
          Timi Lawal
        </a>
      </footer>
    </div>
  );
}
