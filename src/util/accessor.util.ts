export function accessIndex<T>(
  array: T[],
  index: number,
  defaultValue: T | null = null
) {
  return index < 0 || index >= array.length ? defaultValue : array[index];
}
