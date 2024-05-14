export function twoSum(array, targetSum) {
  const map = new Map();

  for (let i = 0; i < array.length; i++) {
    const diff = targetSum - array[i];

    if (map.has(diff)) {
      return [map.get(diff), array[i]];
    } else {
      map.set(array[i], array[i]);
    }
  }

  return [];
}
