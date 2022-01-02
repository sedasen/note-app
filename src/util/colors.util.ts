export enum ColorName {
  RED = "red",
  ORANGE = "orange",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  GREEN = "green",
  WHITE = "white",
  BLACK = "black",
  WRAPPER = "wrapper-bg",
  CONTAINER = "container-bg",
  CARD = "card-bg",
  INPUT = "input-bg",
  BUTTON = "button-bg",
  TEXT = "default-text"
}

export const colorMap = new Map<ColorName, { dark: string; light: string }>();

// Lookup construction
colorMap.set(ColorName.RED, { dark: "#d63532", light: "#DA3633" });
colorMap.set(ColorName.ORANGE, { dark: "#F0883E", light: "#F0883E" });
colorMap.set(ColorName.BLUE, { dark: "#1F6FEB", light: "#1F6FEB" });
colorMap.set(ColorName.YELLOW, { dark: "#ffd983", light: "#ffaaaa" });
colorMap.set(ColorName.PURPLE, { dark: "#8957e5", light: "#8957E5" });
colorMap.set(ColorName.GREEN, { dark: "#3FB950", light: "#3FB950" });
colorMap.set(ColorName.WHITE, { dark: "#FFFFFF", light: "#FFFFFF" });
colorMap.set(ColorName.BLACK, { dark: "#000000", light: "#000000" });
colorMap.set(ColorName.WRAPPER, { dark: "#090c10", light: "#F6F8FA" });
colorMap.set(ColorName.CONTAINER, { dark: "#0d1117", light: "#ffffff" });
colorMap.set(ColorName.CARD, { dark: "#1d2127", light: "#F4F5F7" });
colorMap.set(ColorName.INPUT, { dark: "#161b22", light: "#F7F8FA" });
colorMap.set(ColorName.BUTTON, { dark: "#21262d", light: "#F4F5F7" });
colorMap.set(ColorName.TEXT, { dark: "#c6ced6", light: "#24292E" });

// Fetching logic with WHITE fallback
export function getColor(color: ColorName, theme: "light" | "dark") {
  const colorName = colorMap.get(color) ?? colorMap.get(ColorName.WHITE)!;
  return colorName[theme];
}
