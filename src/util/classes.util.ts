export function classes<T>(...array: T[]) {
  return array.filter((e) => e !== null && e !== undefined && !!e).join(" ");
}
