import type { Component } from "svelte";
import { writable } from "svelte/store";

import { ViewIndex } from "@/classes/ViewIndex.localStorage";
import View0 from "@/components/body/view-0/View0.svelte";
import View1 from "@/components/body/view-1/View1.svelte";

const TRANSITION_VIEW_DURATION = 3000;

type View = {
  id: number;
  body: Component;
  position: Vec3D;
};

export const views: View[] = [
  { id: 0, body: View0, position: [0, 0, 1.7] },
  { id: 1, body: View1, position: [20, 20, 20] },
];

let viewIndex = Number(ViewIndex.get());
export let view = writable(views[viewIndex]);

let timeoutId: NodeJS.Timeout;
export let isViewTransitioning = writable(false);

export function gotToNextView() {
  if (viewIndex === views.length - 1) return;

  viewIndex += 1;
  ViewIndex.set(viewIndex);
  view.set(views[viewIndex]);
  setIsViewTransitioning();
}

export function goToPreviousView() {
  if (viewIndex === 0) return;

  viewIndex -= 1;
  ViewIndex.set(viewIndex);
  view.set(views[viewIndex]);
  setIsViewTransitioning();
}

function setIsViewTransitioning() {
  isViewTransitioning.set(true);
  clearTimeout(timeoutId);

  timeoutId = setTimeout(
    () => isViewTransitioning.set(false),
    TRANSITION_VIEW_DURATION
  );
}
