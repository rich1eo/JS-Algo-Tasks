import { expect, test } from 'vitest';
import { movingAverage } from './movingAverage';

test('movingAverage', () => {
  expect(movingAverage([1, 2, 3, 4, 5, 6, 7], 4)).toStrictEqual([
    2.5, 3.5, 4.5, 5.5,
  ]);
});
