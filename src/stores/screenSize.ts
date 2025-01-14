import { writable } from "svelte/store";

const MAX_MOBILE_SCREEN_SIZE = 768;

export const isMobile = writable(window.innerWidth <= MAX_MOBILE_SCREEN_SIZE);

function updateSize() {
  isMobile.set(window.innerWidth <= MAX_MOBILE_SCREEN_SIZE);
}

window.addEventListener("resize", updateSize);
