import { expect, test } from 'vitest';
import { getLongestWord } from './getLongestWord';

test('getLongestWord', () => {
  expect(getLongestWord(19, 'i love segment tree')).toStrictEqual('segment');
  expect(getLongestWord(21, 'frog jumps from river')).toStrictEqual('jumps');
});
