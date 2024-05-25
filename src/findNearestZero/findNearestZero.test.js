import { expect, test } from 'vitest';
import { findNearestDistanceToZero } from './findNearestZero';

test('findNearestDistanceToZero', () => {
  expect(findNearestDistanceToZero([0, 1, 4, 9, 0])).toStrictEqual([
    0, 1, 2, 1, 0,
  ]);
  expect(findNearestDistanceToZero([0, 7, 9, 4, 8, 20])).toStrictEqual([
    0, 1, 2, 3, 4, 5,
  ]);
  expect(
    findNearestDistanceToZero([98, 0, 10, 77, 0, 59, 28, 0, 94])
  ).toStrictEqual([1, 0, 1, 1, 0, 1, 1, 0, 1]);
});
