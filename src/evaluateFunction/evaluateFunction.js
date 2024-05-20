/**
 * calculate formula:  y = a(x**2) + bx + c
 * @param {number} x
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
export function evaluateFunction(a, x, b, c) {
  return Math.pow(x, 2) * a + b * x + c;
}
