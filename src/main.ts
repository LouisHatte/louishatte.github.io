import { mount } from "svelte";

import App from "@/App.svelte";
import { initLanquage, initLocalStorage } from "@/init";
import "@/apis/firebase";
import { initColors } from "@/lib/styles/colors";

initColors();
initLanquage();
initLocalStorage();

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
