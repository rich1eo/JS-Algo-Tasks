import { expect, test } from 'vitest';
import { evaluateFunction } from './evaluateFunction';

test('evaluateFunction', () => {
  expect(evaluateFunction(-8, -5, -2, 7)).toStrictEqual(-183);
});
