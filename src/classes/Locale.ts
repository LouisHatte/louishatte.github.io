import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export class Locale {
  static get(): "en" | "fr" {
    const currentLocale = get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist.");
    return currentLocale.startsWith("en") ? "en" : "fr";
  }

  static switch() {
    const currentLocale = Locale.get();
    locale.set(currentLocale === "en" ? "fr" : "en");
  }
}
