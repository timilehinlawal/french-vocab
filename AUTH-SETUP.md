# Google sign-in & cloud sync — setup

The app works without any of this (local-only, stored in the browser). To enable
**Google sign-in** and **cross-device progress sync**, connect a free Firebase
project. Takes ~10 minutes.

## 1. Create a Firebase project

1. Go to <https://console.firebase.google.com> → **Add project**. Name it
   (e.g. `french-vocab`). Google Analytics is optional — you can skip it.

## 2. Register a Web app

1. In the project, click the **`</>`** (Web) icon to add an app.
2. Give it a nickname; **don't** enable Firebase Hosting.
3. Firebase shows a `firebaseConfig` object. Copy those values into a
   `.env.local` file (use [.env.example](.env.example) as the template):

   | firebaseConfig field | env var |
   | --- | --- |
   | `apiKey` | `VITE_FIREBASE_API_KEY` |
   | `authDomain` | `VITE_FIREBASE_AUTH_DOMAIN` |
   | `projectId` | `VITE_FIREBASE_PROJECT_ID` |
   | `storageBucket` | `VITE_FIREBASE_STORAGE_BUCKET` |
   | `messagingSenderId` | `VITE_FIREBASE_MESSAGING_SENDER_ID` |
   | `appId` | `VITE_FIREBASE_APP_ID` |

   These are public identifiers, not secrets — they're meant to ship in the
   frontend. Access is controlled by the security rules in step 5.

## 3. Enable Google sign-in

1. **Build → Authentication → Get started**.
2. **Sign-in method** tab → **Google** → enable → pick a support email → Save.

## 4. Create the Firestore database

1. **Build → Firestore Database → Create database**.
2. Start in **production mode**, pick a region close to your users.

## 5. Lock down the data with security rules

In **Firestore → Rules**, paste this so each user can only read/write their own
document, then **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 6. Authorize your domains

**Authentication → Settings → Authorized domains** → add the domains the app
runs on. `localhost` is there by default; add your Vercel domain
(e.g. `french-vocab.vercel.app` and any custom domain).

## 7. Run it

```bash
npm run dev
```

You'll see the sign-in page. "Continue with Google" syncs progress to the cloud;
"continue without an account" keeps the old local-only behavior.

## Deploying on Vercel

Add the same `VITE_FIREBASE_*` variables in **Vercel → Project → Settings →
Environment Variables**, then redeploy. (Vite inlines `VITE_`-prefixed vars at
build time, so a rebuild is required after changing them.)

## How sync works

- Progress lives in a single Firestore document per user: `users/{uid}`.
- **First sign-in** on a device with existing local data pushes that data to the
  cloud once (if the cloud record is empty).
- After that, **the cloud is the source of truth** — signing in on another
  device loads the cloud copy. Local changes are debounced back up automatically.
- Theme stays a per-device preference and is not synced.
