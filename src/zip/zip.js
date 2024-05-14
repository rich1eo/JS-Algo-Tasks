// const _readline = require('readline');

// const _reader = _readline.createInterface({
//   input: process.stdin,
// });

// const _inputLines = [];
// let _curLine = 0;

// _reader.on('line', (line) => {
//   _inputLines.push(line);
// });

// process.stdin.on('end', solve);

export function zip(a, b) {
  // Ваше решение
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

// function solve() {
//   const n = readInt();
//   const a = readArray();
//   const b = readArray();
//   process.stdout.write(`${zip(a, b).join(' ')}`);
// }

// function readInt() {
//   const n = Number(_inputLines[_curLine]);
//   _curLine++;
//   return n;
// }

// function readArray() {
//   var arr = _inputLines[_curLine]
//     .trim(' ')
//     .split(' ')
//     .map((num) => Number(num));
//   _curLine++;
//   return arr;
// }
