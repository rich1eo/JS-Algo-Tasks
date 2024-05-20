import { expect, test } from 'vitest';
import { isPalindrome } from './isPalindrome';

test('isPalindrome', () => {
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('zo')).toBe(false);
});
