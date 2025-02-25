import { mount } from "svelte";

import App from "@/App.svelte";
import { initLanguage, initLocalStorage } from "@/init";
import "@/apis/firebase";
import { initColors } from "@/lib/styles/colors";

initColors();
initLanguage();
initLocalStorage();

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
