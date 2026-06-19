import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Firebase config is read from Vite env vars (see .env.example). These keys are
// not secrets — they identify the project and are safe to ship in the frontend.
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// When the project isn't configured yet, the app falls back to local-only mode
// (localStorage) so it keeps working without crashing before keys are added.
export const firebaseEnabled = Boolean(config.apiKey && config.projectId && config.appId);

let app: FirebaseApp | undefined;
let authInstance: Auth | undefined;
let dbInstance: Firestore | undefined;

if (firebaseEnabled) {
  app = initializeApp(config);
  authInstance = getAuth(app);
  dbInstance = getFirestore(app);
}

export const auth = authInstance;
export const db = dbInstance;
export const googleProvider = new GoogleAuthProvider();
