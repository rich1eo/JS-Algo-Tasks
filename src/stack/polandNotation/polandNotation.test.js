import { test, expect } from 'vitest';
import { polandNotation } from './polandNotation';

test('polandNotation', () => {
  const polandExpression = '0 4 +';
  expect(polandNotation(polandExpression)).toBe(4);
});
