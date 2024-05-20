import { expect, test } from 'vitest';
import { getWeatherRandomness } from './getWeatherRandomness';

test('getWeatherRandomness', () => {
  expect(getWeatherRandomness([-1, -10, -8, 0, 2, 0, 5])).toStrictEqual(3);
  expect(getWeatherRandomness([1, 2, 5, 4, 8])).toStrictEqual(2);
});
