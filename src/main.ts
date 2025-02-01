import { mount } from "svelte";

import App from "@/App.svelte";
import { initFirebase, initLanquage, initLocalStorage } from "@/init";

initLanquage();
initLocalStorage();
export const firebase = initFirebase();

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
