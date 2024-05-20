/**
 * @param {string} line
 */
export function isPalindrome(line) {
  let left = 0;
  let right = line.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNumeric(line[left])) {
      left++;
    }

    while (left < right && !isAlphaNumeric(line[right])) {
      right--;
    }

    if (line[left].toLowerCase() !== line[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
 * @param {string} c
 */
function isAlphaNumeric(c) {
  return (
    (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || (c >= '0' && c <= '9')
  );
}
