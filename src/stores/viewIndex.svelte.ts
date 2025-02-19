import { get, writable } from "svelte/store";

type ViewName = "preview" | "introduction" | "projects";
type View = {
  name: ViewName;
  position: Vec3D;
};

export const views: View[] = [
  { name: "preview", position: [0, 0, 5] },
  { name: "introduction", position: [10, 10, 20] },
  { name: "projects", position: [0, 15, 10] },
];

let viewIndex = 0;
export let view = writable(views[viewIndex]);

view.subscribe(() => {
  console.log(get(view));
});

export function gotToNextView() {
  viewIndex = (viewIndex + 1) % views.length;
  view.set(views[viewIndex]);
}

export function goToPreviousView() {
  viewIndex = (viewIndex + views.length - 1) % views.length;
  view.set(views[viewIndex]);
}
