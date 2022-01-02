export enum ColorName {
  RED = "red",
  ORANGE = "orange",
  BLUE = "blue",
  YELLOW = "yellow",
  PURPLE = "purple",
  GREEN = "green",
  WHITE = "white",
}

const colorMap = new Map<ColorName, { dark: string; light: string }>();

// Lookup construction
colorMap.set(ColorName.RED, { dark: "#ff0000", light: "#ffaaaa" });
// TODO: @Seda, construct all the colors lookup
colorMap.set(ColorName.WHITE, { dark: "#ffffff", light: "#ffffff" });

// Fetching logic with WHITE fallback
export function getColor(color: ColorName, theme: "light" | "dark") {
  const colorName = colorMap.get(color) ?? colorMap.get(ColorName.WHITE)!;
  return colorName[theme];
}
