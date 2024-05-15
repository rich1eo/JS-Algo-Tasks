/**
 *
 * @param {number[]} array
 * @param {number} windowSize
 */
export function movingAverage(array, windowSize) {
  const result = [];
  let currentSum = 0;

  for (let i = 0; i < windowSize; i++) {
    currentSum += array[i];
  }

  result.push(currentSum / windowSize);

  for (let i = 0; i < array.length - windowSize; i++) {
    currentSum -= array[i];
    currentSum += array[i + windowSize];
    const currentAvg = currentSum / windowSize;
    result.push(currentAvg);
  }

  return result;
}
