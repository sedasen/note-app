export function classes(...array: any[]) {
  return array.filter((e) => e !== null && e !== undefined && !!e).join(" ");
}
