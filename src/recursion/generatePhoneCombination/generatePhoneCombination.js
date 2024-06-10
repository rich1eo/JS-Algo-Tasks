/**
 * @param {string} phoneButtons
 */
export function generateCombinations(phoneButtons) {
  const combinations = [];
  const phoneMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  function backtrack(combination = '', nextDigit) {
    if (nextDigit.length === 0) {
      combinations.push(combination);
    } else {
      const digit = nextDigit[0];
      const letters = phoneMap[digit];

      for (let i = 0; i < letters.length; i++) {
        backtrack(combination + letters[i], nextDigit.slice(1));
      }
    }
  }

  backtrack('', phoneButtons);

  return combinations;
}
