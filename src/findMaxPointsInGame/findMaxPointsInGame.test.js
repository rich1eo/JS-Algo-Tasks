import { expect, test } from 'vitest';
import { findMaxPointsInGame } from './findMaxPointsInGame';

test('findMaxPointsInGame', () => {
  expect(
    findMaxPointsInGame(3, [
      ['1', '2', '3', '1'],
      ['2', '.', '.', '2'],
      ['2', '.', '.', '2'],
      ['2', '.', '.', '2'],
    ])
  ).toStrictEqual(2);
  expect(
    findMaxPointsInGame(4, [
      ['1', '1', '1', '1'],
      ['9', '9', '9', '9'],
      ['1', '1', '1', '1'],
      ['9', '9', '1', '1'],
    ])
  ).toStrictEqual(1);
  expect(
    findMaxPointsInGame(4, [
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
      ['1', '1', '1', '1'],
    ])
  ).toStrictEqual(0);
});
