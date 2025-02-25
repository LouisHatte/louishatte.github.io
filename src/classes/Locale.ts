import { locale } from "svelte-i18n";
import { get } from "svelte/store";

export type TLocale = "en" | "fr";

export class Locale {
  static get(_locale?: string | null): TLocale {
    const currentLocale = _locale ?? get(locale);
    if (!currentLocale) throw new Error("Current locale doesn't exist.");
    return currentLocale.startsWith("en") ? "en" : "fr";
  }

  static switch(newLocale: TLocale) {
    locale.set(newLocale);
  }
}
