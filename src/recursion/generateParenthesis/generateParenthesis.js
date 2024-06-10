export function generateParenthesis(n) {
  const res = [];

  function backtrack(parenthesis = '', left = 0, right = 0) {
    if (parenthesis.length === 2 * n) {
      res.push(parenthesis);
    }

    if (left < n) {
      backtrack(parenthesis + '(', left + 1, right);
    }

    if (right < left) {
      backtrack(parenthesis + ')', left, right + 1);
    }
  }

  backtrack();

  return res;
}
