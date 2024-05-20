import { expect, test } from 'vitest';
import { getNeighbors } from './getNeighborsInMatrix';

test('getNeighborsInMatrix', () => {
  expect(
    getNeighbors(
      [
        [1, 2, 3],
        [0, 2, 6],
        [7, 4, 1],
        [2, 7, 0],
      ],
      3,
      0
    )
  ).toStrictEqual([7, 7]);

  expect(
    getNeighbors(
      [
        [1, 2, 3],
        [0, 2, 6],
        [7, 4, 1],
        [2, 7, 0],
      ],
      0,
      0
    )
  ).toStrictEqual([0, 2]);
});
