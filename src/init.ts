import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import { Liker } from "@/classes/Liker";
import { QuestionCounter } from "@/classes/QuestionCounter";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
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

  Liker.set();
}
