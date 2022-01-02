export function isIndexAccessible(array: any[], index: number): boolean {
  return index < 0 || index >= array.length;
}

export function accessIndex<T>(
  array: T[],
  index: number,
  defaultValue: T | null = null
) {
  return isIndexAccessible(array, index) ? defaultValue : array[index];
}
