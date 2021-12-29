const colorMap = new Map<NoteApp.ColorName, { dark: string; light: string }>();

// Lookup construction
colorMap.set(NoteApp.ColorName.RED, { dark: "#ff0000", light: "#ffaaaa" });
// TODO: @Seda, construct all the colors lookup
colorMap.set(NoteApp.ColorName.WHITE, { dark: "#ffffff", light: "#ffffff" });

// Fetching logic with WHITE fallback
export function getColor(color: NoteApp.ColorName, theme: "light" | "dark") {
  const colorName =
    colorMap.get(color) ?? colorMap.get(NoteApp.ColorName.WHITE)!;
  return colorName[theme];
}
