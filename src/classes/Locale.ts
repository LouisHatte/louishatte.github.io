import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export class Locale {
  static get(_locale?: string | null): "en" | "fr" {
    const currentLocale = _locale ?? get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist.");
    return currentLocale.startsWith("en") ? "en" : "fr";
  }

  static switch(newLocale: "en" | "fr") {
    locale.set(newLocale);
  }
}
