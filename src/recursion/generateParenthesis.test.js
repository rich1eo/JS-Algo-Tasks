import { expect, test } from 'vitest';
import { generateParenthesis } from './generateParenthesis';

test('generateParenthesis', () => {
  expect(generateParenthesis(3)).toStrictEqual([
    '((()))',
    '(()())',
    '(())()',
    '()(())',
    '()()()',
  ]);
});
