import { initializeApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
import {
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics";
import { getDatabase, ref, push, set } from "firebase/database";

import { IS_PRODUCTION } from "@/constants";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const functions = getFunctions(app, "us-central1");
const db = getDatabase(
  app,
  import.meta.env.VITE_FIREBASE_REALTIME_DATABASE_URL
);

if (!IS_PRODUCTION) {
  connectFunctionsEmulator(functions, "localhost", 5001);
}

setAnalyticsCollectionEnabled(analytics, IS_PRODUCTION);

const REF = IS_PRODUCTION ? "questions" : "questions-test";

async function saveQuestion(text: string) {
  const messageRef = push(ref(db, REF));
  await set(messageRef, { text });
}

export { analytics, logEvent, functions, saveQuestion };
