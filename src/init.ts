import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import { Liker } from "@/classes/Liker.localStorage";
import { QuestionCounter } from "@/classes/QuestionCounter.localStorage";
import { ColorIndex } from "@/classes/ColorIndex.localStorage";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export function initLanguage() {
  addMessages("en", en);
  addMessages("fr", fr);
  init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });
}

export function initLocalStorage() {
  QuestionCounter.init();
  Liker.init();
  ColorIndex.init();
}
