import { expect, test } from 'vitest';
import { zip } from './zip';

test('zip', () => {
  expect(zip([1, 2, 3], [4, 5, 6])).toStrictEqual([1, 4, 2, 5, 3, 6]);
});
