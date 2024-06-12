import { expect, test } from 'vitest';
import { isSubsequence } from './isSubsiquence';

test('isSubsequence', () => {
  expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
  expect(isSubsequence('axc', 'ahbgdc')).toBe(false);
});
