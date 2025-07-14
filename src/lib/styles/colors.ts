import { get, writable, type Writable } from "svelte/store";

import { ColorIndex } from "@/classes/ColorIndex.localStorage";

type Color = "neutral" | "purple" | "blue" | "red";
type Id = "0" | "1" | "2" | "3" | "4" | "5";

type ColorId = `${Color}${Id}`;
type ActiveColorId = `color${Id}`;

const COLORS: Color[] = ["neutral", "purple", "blue", "red"];
export const NUMBER_OF_COLORS = 6;

const COLOR_IDS: Record<ColorId, string> = {
  neutral0: "rgba(255, 255, 255, 0.3)",
  neutral1: "rgba(255, 255, 255, 1)",
  neutral2: "rgba(225, 225, 225, 1)",
  neutral3: "rgba(158, 158, 158, 1)",
  neutral4: "rgba(0, 0, 0, 1)",
  neutral5: `linear-gradient(
    to left,
    rgba(255, 255, 255, 1) 0%,
    rgba(166, 166, 166, 1) 10%,
    rgba(105, 105, 105, 1) 20%,
    rgba(64, 62, 62, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(64, 62, 62, 1) 70%,
    rgba(105, 105, 105, 1) 80%,
    rgba(166, 166, 166, 1) 90%,
    rgba(255, 255, 255, 1) 100%
    )
    `,

  purple0: "rgba(240, 230, 255, 0.3)",
  purple1: "rgba(220, 200, 255, 1)",
  purple2: "rgba(200, 170, 255, 1)",
  purple3: "rgba(150, 100, 220, 1)",
  purple4: "rgba(75, 0, 130, 1)",
  purple5: `linear-gradient(
    to left,
    rgba(150, 100, 220, 1) 0%,
    rgba(113, 90, 150, 1) 10%,
    rgba(78, 68, 92, 1) 20%,
    rgba(52, 47, 56, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(52, 47, 56, 1) 70%,
    rgba(78, 68, 92, 1) 80%,
    rgba(113, 90, 150, 1) 90%,
    rgba(150, 100, 220, 1) 100%
    )`,

  blue0: "rgba(230, 240, 255, 0.3)",
  blue1: "rgba(200, 220, 255, 1)",
  blue2: "rgba(160, 190, 255, 1)",
  blue3: "rgba(100, 150, 255, 1)",
  blue4: "rgba(0, 0, 255, 1)",
  blue5: `linear-gradient(
    to left,
    rgba(100, 150, 255, 1) 0%,
    rgba(106, 128, 176, 1) 10%,
    rgba(81, 88, 112, 1) 20%,
    rgba(43, 47, 51, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(43, 47, 51, 1) 70%,
    rgba(81, 88, 112, 1) 80%,
    rgba(106, 128, 176, 1) 90%,
    rgba(100, 150, 255, 1) 100%
    )`,

  red0: "rgba(255, 230, 230, 0.3)",
  red1: "rgba(255, 200, 200, 1)",
  red2: "rgba(255, 150, 150, 1)",
  red3: "rgba(220, 100, 100, 1)",
  red4: "rgba(255, 0, 0, 1)",
  red5: `linear-gradient(
    to left,
    rgba(220, 100, 100, 1) 0%,
    rgba(163, 98, 98, 1) 10%,
    rgba(92, 68, 68, 1) 20%,
    rgba(43, 36, 36, 1) 30%,
    rgba(0, 0, 0, 1) 45%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 55%,
    rgba(43, 36, 36, 1) 70%,
    rgba(92, 68, 68, 1) 80%,
    rgba(163, 98, 98, 1) 90%,
    rgba(220, 100, 100, 1) 100%
    )`,
};

const colorIndex = ColorIndex.get();
const color: Writable<Color> = writable(COLORS[colorIndex]);

const startingTheme: Record<ActiveColorId, string> = Object.fromEntries(
  Array.from({ length: NUMBER_OF_COLORS }, (_, i) => {
    const index = `${i}` as Id;
    return [`color${i}`, COLOR_IDS[`${get(color)}${index}`]];
  })
) as Record<ActiveColorId, string>;

export const theme: Writable<Record<ActiveColorId, string>> =
  writable(startingTheme);

export function initColors() {
  for (const [key, value] of Object.entries(get(theme))) {
    document.documentElement.style.setProperty(`--${key}`, value);
  }
}

function getNextColor() {
  const currentColor = get(color);
  const currentIndex = COLORS.findIndex((c) => c === currentColor);
  if (currentIndex === -1) {
    throw new Error("Index color error.");
  }

  const nextIndex = (currentIndex + 1) % COLORS.length;
  return { nextIndex, nextColor: COLORS[nextIndex] };
}

export function updateTheme() {
  const { nextIndex, nextColor } = getNextColor();
  if (!nextColor) return;

  ColorIndex.set(nextIndex);

  Object.keys(get(theme)).forEach((_, i) => {
    const index = `${i}` as Id;
    const key: ColorId = `${nextColor}${index}`;
    document.documentElement.style.setProperty(
      `--color${index}`,
      `${COLOR_IDS[key]}`
    );
  });

  theme.update(() => {
    return Object.fromEntries(
      Object.keys(get(theme)).map((key, i) => {
        const index = `${i}` as Id;
        const value: ColorId = `${nextColor}${index}`;
        return [key as ActiveColorId, COLOR_IDS[value]];
      })
    ) as Record<ActiveColorId, string>;
  });

  color.update(() => nextColor);
}
