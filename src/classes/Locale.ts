import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export class Locale {
  static get(): "en" | "fr" {
    const currentLocale = get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist.");
    return currentLocale.startsWith("en") ? "en" : "fr";
  }

  static switch(_locale: "en" | "fr") {
    const currentLocale = Locale.get();
    if (_locale === currentLocale) return;
    locale.set(currentLocale === "en" ? "fr" : "en");
  }
}
