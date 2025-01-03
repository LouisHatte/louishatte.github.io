import { mount } from "svelte";
import { init, addMessages, getLocaleFromNavigator } from "svelte-i18n";

import App from "@/App.svelte";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";

addMessages("en", en);
addMessages("fr", fr);
init({ initialLocale: getLocaleFromNavigator(), fallbackLocale: "en" });

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
