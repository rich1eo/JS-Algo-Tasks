import { expect, test } from 'vitest';
import { findFlowerBeds } from './findFlowerBeds';

test('findFlowerBeds', () => {
  expect(
    findFlowerBeds([
      [7, 8],
      [7, 8],
      [2, 3],
      [6, 10],
    ])
  ).toStrictEqual([
    [2, 3],
    [6, 10],
  ]);

  expect(
    findFlowerBeds([
      [2, 3],
      [3, 4],
      [3, 4],
      [5, 6],
    ])
  ).toStrictEqual([
    [2, 4],
    [5, 6],
  ]);
});
