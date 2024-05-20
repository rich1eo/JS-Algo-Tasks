/**
 * Checks if all numbers are even or all odd
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @returns true if all the numbers are even or odd
 */
export function checkParity(a, b, c) {
  if (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    return true;
  }
  if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0) {
    return true;
  }
  return false;
}
