import { insertionSort } from '../insertions';

/**
 * @param {string[]} nums
 */
export function largestNumber(nums) {
  const res = insertionSort(nums);

  return res.join('');
}
