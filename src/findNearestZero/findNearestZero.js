/**
 * @param {number[]} arr
 */
export function findNearestDistanceToZero(arr) {
  const res = new Array(arr.length).fill(Infinity);

  let nearestLeftZeroIndex = null;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (num === 0) {
      nearestLeftZeroIndex = i;
    }

    if (nearestLeftZeroIndex !== null) {
      res[i] = i - nearestLeftZeroIndex;
    }
  }

  let nearestRightZeroIndex = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];

    if (num === 0) {
      nearestRightZeroIndex = i;
    }

    if (nearestRightZeroIndex !== null) {
      res[i] = Math.min(res[i], nearestRightZeroIndex - i);
    }
  }

  return res;
}
