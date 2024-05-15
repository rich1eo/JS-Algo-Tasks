import { expect, test } from 'vitest';
import { twoSum, twoSumTwoPointersForSortedArray } from './twoSum';

test('twoSum', () => {
  expect(twoSum([1, 2, 3, 4], 4)).toStrictEqual([1, 3]);
});

test('twoSumTwoPointersForSortedArray', () => {
  expect(twoSumTwoPointersForSortedArray([1, 2, 3, 4], 4)).toStrictEqual([
    1, 3,
  ]);
});
