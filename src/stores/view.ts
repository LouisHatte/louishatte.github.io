import type { Component } from "svelte";
import { writable } from "svelte/store";

import View0 from "@/components/body/view-0/View0.svelte";
import View1 from "@/components/body/view-1/View1.svelte";
import View2 from "@/components/body/view-2/View2.svelte";
import { ViewIndex } from "@/classes/ViewIndex.localStorage";

export const TRANSITION_VIEW_DURATION = 1000;

type View = {
  body: Component;
  position: Vec3D;
};

export const views: View[] = [
  { body: View0, position: [0, 0, 5] },
  { body: View1, position: [20, 10, 10] },
  { body: View2, position: [0, -15, -15] },
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
