/**
 *
 * @param {number[]} temperatures
 */
export function getWeatherRandomness(temperatures) {
  let counter = 0;

  for (let i = 0; i < temperatures.length; i++) {
    const curTemp = temperatures[i];
    const prevTemp = i > 0 ? temperatures[i - 1] : -Infinity;
    const nextTemp =
      i < temperatures.length - 1 ? temperatures[i + 1] : -Infinity;

    if (curTemp > prevTemp && curTemp > nextTemp) {
      counter++;
    }
  }

  return counter;
}

// console.log(
//   `curTemp: ${curTemp} | prevTemp: ${prevTemp} | nextTemp: ${nextTemp} | if: ${
//     curTemp > prevTemp && curTemp > nextTemp
//   }`
// );
