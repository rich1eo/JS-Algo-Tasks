import { expect, test } from 'vitest';
import { checkParity } from './checkParity';

test('checkParity', () => {
  expect(checkParity(1, 2, -3)).toStrictEqual(false);
  expect(checkParity(7, 11, 7)).toStrictEqual(true);
  expect(checkParity(2, 4, 8)).toStrictEqual(true);
});
