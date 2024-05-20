/**
 *
 * @param {number} length
 * @param {string} line
 */
export function getLongestWord(length, line) {
  const words = line.split(' ');
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
