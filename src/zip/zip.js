/**
 *
 * @param {number[]} a
 * @param {number[]} b
 */
export function zip(a, b) {
  const zipArrLength = a.length + b.length;
  const zipArr = [];

  let aIndex = 0;
  let bIndex = 0;

  for (let i = 0; i < zipArrLength; i++) {
    if (aIndex > bIndex) {
      zipArr.push(b[bIndex++]);
    } else if (aIndex <= bIndex) {
      zipArr.push(a[aIndex++]);
    }
  }

  return zipArr;
}
