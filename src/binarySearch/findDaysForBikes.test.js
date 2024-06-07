import { expect, test } from 'vitest';
import {
  findDaysForBikes,
  findDaysForBikesRecursive,
} from './findDaysForBikes';

test('findDaysForBikes', () => {
  const savings = [1, 2, 4, 4, 6, 8];
  const cost = 3;
  expect(findDaysForBikes(savings, cost)).toStrictEqual([3, 5]);
  expect(findDaysForBikesRecursive(savings, cost)).toStrictEqual([3, 5]);
});
