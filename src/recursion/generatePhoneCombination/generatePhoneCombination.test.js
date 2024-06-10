import { expect, test } from 'vitest';
import { generateCombinations } from './generatePhoneCombination';

test('generatePhoneCombination', () => {
  expect(generateCombinations('23')).toStrictEqual([
    'ad',
    'ae',
    'af',
    'bd',
    'be',
    'bf',
    'cd',
    'ce',
    'cf',
  ]);
});
