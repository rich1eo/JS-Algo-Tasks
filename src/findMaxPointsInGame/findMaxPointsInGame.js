/**
 * @param {number} k
 * @param {[string[]]} matrix
 */
export function findMaxPointsInGame(k, matrix) {
  const numsArr = new Array(9).fill(0);
  const maxCanPush = k * 2;
  let points = 0;

  for (const arr of matrix) {
    for (const num of arr) {
      if (num !== '.') {
        if (numsArr[num]) {
          numsArr[num] += 1;
        } else {
          numsArr[num] = 1;
        }
      }
    }
  }

  for (const count of numsArr) {
    if (count > 0 && count <= maxCanPush) {
      points++;
    }
  }

  return points;
}
