import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

// Catches render-time crashes so they surface on screen (and in the console)
// instead of leaving a blank page.
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    // Keep the raw error in the console for debugging.
    console.error("App crashed:", error);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="app auth-app">
        <div className="ambient" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <main className="stage">
          <div className="auth-card">
            <span className="brand-mark auth-mark" aria-hidden="true">fr</span>
            <div className="auth-heading">
              <h1 className="auth-title">something broke</h1>
              <p className="auth-subtitle">{this.state.error.message}</p>
            </div>
            <button className="auth-google" onClick={() => window.location.reload()}>
              <span>reload</span>
            </button>
          </div>
        </main>
      </div>
    );
  }
}
