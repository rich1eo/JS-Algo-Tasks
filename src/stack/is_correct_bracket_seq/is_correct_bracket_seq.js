/**
 * @param {string} brcts
 */
export function is_correct_bracket_seq(brcts) {
  if (!brcts) return true;

  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const stack = [];

  for (const word of brcts) {
    // push opening bracket and continue
    if (!map[word]) {
      stack.push(word);
      continue;
    }

    // if "closing bracket" and stack is empty - false
    // if "closing bracket" !== last "open bracket" in stack - false
    if (!stack.length || stack.slice(-1)[0] !== map[word]) {
      return false;
    }

    // if "closing bracket" === last "open bracket" - pop last "open bracket" from stack
    stack.pop();
  }

  // if stack is empty - brackets seq is correct
  return !stack.length;
}
