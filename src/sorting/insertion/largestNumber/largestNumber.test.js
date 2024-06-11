import { expect, test } from 'vitest';
import { largestNumber } from './largestNumber';

test('largestNumber', () => {
  expect(largestNumber(['3', '30', '34', '5', '9'])).toStrictEqual('9534330');
});
