/**
 *
 * @param {[number[]]} matrix
 * @param {number} row
 * @param {number} col
 */
export function getNeighbors(matrix, row, col) {
  const res = [];
  const rightNeighbor = matrix[row][col + 1];
  const leftNeighbor = matrix[row][col - 1];
  const topNeighbor = matrix[row - 1]?.[col];
  const bottomNeighbor = matrix[row + 1]?.[col];

  if (rightNeighbor !== null && rightNeighbor !== undefined) {
    res.push(rightNeighbor);
  }

  if (leftNeighbor !== null && leftNeighbor !== undefined) {
    res.push(leftNeighbor);
  }

  if (topNeighbor !== null && topNeighbor !== undefined) {
    res.push(topNeighbor);
  }

  if (bottomNeighbor !== null && bottomNeighbor !== undefined) {
    res.push(bottomNeighbor);
  }

  return res.sort((a, b) => a - b);
}
