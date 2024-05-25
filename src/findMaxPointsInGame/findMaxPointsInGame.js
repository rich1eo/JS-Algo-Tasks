/**
 * @param {number} k
 * @param {[string[]]} matrix
 */
export function findMaxPointsInGame(k, matrix) {
  const numsMap = {};
  const maxCanPush = k * 2;
  let points = 0;

  for (const arr of matrix) {
    for (const num of arr) {
      if (num !== '.') {
        if (numsMap[num]) {
          numsMap[num] += 1;
        } else {
          numsMap[num] = 1;
        }
      }
    }
  }

  console.log(numsMap);

  for (const count of Object.values(numsMap)) {
    if (count <= maxCanPush) {
      points++;
    }
  }

  return points;
}
