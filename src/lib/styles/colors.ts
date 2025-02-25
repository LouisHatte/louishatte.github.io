import { ColorIndex } from "@/classes/ColorIndex.localStorage";
import { get, writable, type Writable } from "svelte/store";

type Color = "neutral" | "purple" | "indigo";
type Id = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type ColorId = `${Color}${Id}`;
type ActiveColorId = `color${Id}`;

const COLORS: Color[] = ["neutral", "purple", "indigo"];
const NUMBER_OF_COLORS = 10;

const COLOR_IDS: Record<ColorId, string> = {
  neutral0: "rgba(255, 255, 255, 0.3)",
  neutral1: "rgba(255, 255, 255, 1)",
  neutral2: "rgba(247, 247, 247, 1)",
  neutral3: "rgba(225, 225, 225, 1)",
  neutral4: "rgba(177, 177, 177, 1)",
  neutral5: "rgba(158, 158, 158, 1)",
  neutral6: "rgba(81, 81, 81, 1)",
  neutral7: "rgba(59, 59, 59, 1)",
  neutral8: "rgba(34, 34, 34, 1)",
  neutral9: "rgba(0, 0, 0, 1)",

  purple0: "rgba(218, 196, 255, 0.3)",
  purple1: "rgba(218, 196, 255, 1)",
  purple2: "rgba(185, 144, 255, 1)",
  purple3: "rgba(163, 104, 252, 1)",
  purple4: "rgba(148, 70, 237, 1)",
  purple5: "rgba(135, 25, 224, 1)",
  purple6: "rgba(122, 14, 204, 1)",
  purple7: "rgba(105, 12, 176, 1)",
  purple8: "rgba(88, 10, 148, 1)",
  purple9: "rgba(68, 5, 110, 1)",

  indigo0: "rgba(176, 208, 255, 0.3)",
  indigo1: "rgba(176, 208, 255, 1)",
  indigo2: "rgba(136, 177, 252, 1)",
  indigo3: "rgba(94, 138, 238, 1)",
  indigo4: "rgba(58, 102, 219, 1)",
  indigo5: "rgba(34, 81, 204, 1)",
  indigo6: "rgba(29, 61, 191, 1)",
  indigo7: "rgba(19, 45, 173, 1)",
  indigo8: "rgba(11, 29, 150, 1)",
  indigo9: "rgba(6, 17, 120, 1)",
};

const colorIndex = Number(ColorIndex.get());
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
