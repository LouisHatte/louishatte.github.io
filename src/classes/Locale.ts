import { get } from "svelte/store";
import {
  _,
  addMessages,
  getLocaleFromNavigator,
  init,
  locale,
} from "svelte-i18n";

import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

export type TLocale = "en" | "fr";

export class Locale {
  static init() {
    addMessages("en", en);
    addMessages("fr", fr);
    init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });
  }

  static get(_locale?: string | null): TLocale {
    const currentLocale = _locale ?? get(locale);

    if (!currentLocale) throw new Error("Current locale doesn't exist.");
    return currentLocale.startsWith("en") ? "en" : "fr";
  }

  static switch(newLocale: TLocale) {
    locale.set(newLocale);
  }
}

export { _, locale };
