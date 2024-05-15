/**
 *
 * @param {number[]} array sorted array
 * @param {number} targetSum target sum
 */
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

/**
 *
 * @param {number[]} array sorted array
 * @param {number} targetSum target sum
 */
export function twoSumTwoPointersForSortedArray(array, targetSum) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === targetSum) {
      return [array[left], array[right]];
    }
    if (sum > targetSum) {
      right--;
    } else {
      left++;
    }
  }

  return [];
}
