import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import {
  getAnalytics,
  logEvent,
  setAnalyticsCollectionEnabled,
} from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;
const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_FIREBASE_APP_ID;
const MEASUREMENT_ID = import.meta.env.VITE_FIREBASE_MEASUREMENT_ID;
const EMAIL = import.meta.env.VITE_FIREBASE_EMAIL;
const PASSWORD = import.meta.env.VITE_FIREBASE_PASSWORD;

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

const auth = getAuth(app);
try {
  signInWithEmailAndPassword(auth, EMAIL, PASSWORD);
} catch (err) {
  console.error("Sign in Firebase error.");
  throw err;
}

const db = getDatabase(app);
const analytics = getAnalytics(app);

setAnalyticsCollectionEnabled(analytics, false);

export { db, analytics, logEvent, onValue, ref, set };
