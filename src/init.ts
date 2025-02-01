import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, update } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import { QuestionCounter } from "@/classes/QuestionCounter";
import { DateHelper } from "@/utils/date";

export function initLanquage() {
  addMessages("en", en);
  addMessages("fr", fr);
  init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });
}

export function initLocalStorage() {
  const { updatedAt } = QuestionCounter.get();
  const today = new Date();

  if (!DateHelper.isSameDay(updatedAt, today)) {
    QuestionCounter.reset();
  }
}

export function initFirebase() {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
}
