import { expect, test } from 'vitest';
import { is_correct_bracket_seq } from './is_correct_bracket_seq';

test('is_correct_bracket_seq', () => {
  expect(is_correct_bracket_seq('{[()]}')).toBe(true);
  expect(is_correct_bracket_seq('([)]')).toBe(false);
  expect(is_correct_bracket_seq('')).toBe(true);
});
