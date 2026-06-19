import { useState } from "react";
import { LogOut } from "lucide-react";
import type { User } from "firebase/auth";
import type { SyncStatus } from "../lib/useCloudSync";

interface AccountMenuProps {
  user: User | null;
  syncStatus: SyncStatus;
  onSignIn: () => void;
  onSignOut: () => void;
}

const initialsOf = (user: User) => {
  const base = user.displayName || user.email || "?";
  return base
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

const syncLabel: Record<SyncStatus, string> = {
  idle: "",
  syncing: "syncing…",
  ready: "synced",
  error: "sync error"
};

export function AccountMenu({ user, syncStatus, onSignIn, onSignOut }: AccountMenuProps) {
  const [open, setOpen] = useState(false);

  // Guests get a simple prompt to sign in.
  if (!user) {
    return (
      <button className="theme-btn" onClick={onSignIn} aria-label="Sign in">
        <span>sign in</span>
      </button>
    );
  }

  return (
    <div className="account">
      <button
        className="account-trigger"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
      >
        {user.photoURL ? (
          <img className="account-avatar" src={user.photoURL} alt="" referrerPolicy="no-referrer" />
        ) : (
          <span className="account-avatar account-avatar-fallback">{initialsOf(user)}</span>
        )}
      </button>

      {open && (
        <>
          <button className="account-backdrop" aria-hidden="true" tabIndex={-1} onClick={() => setOpen(false)} />
          <div className="account-menu" role="menu">
            <div className="account-id">
              {user.displayName && <span className="account-name">{user.displayName}</span>}
              {user.email && <span className="account-email">{user.email}</span>}
              {syncLabel[syncStatus] && (
                <span className={`account-sync account-sync-${syncStatus}`}>{syncLabel[syncStatus]}</span>
              )}
            </div>
            <button
              className="account-action"
              role="menuitem"
              onClick={() => {
                setOpen(false);
                onSignOut();
              }}
            >
              <LogOut size={14} />
              sign out
            </button>
          </div>
        </>
      )}
    </div>
  );
}
