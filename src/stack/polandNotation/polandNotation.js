class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

export function polandNotation(polandExp) {
  const stack = new Stack();
  const polandArr = polandExp.split(' ');

  for (const word of polandArr) {
    if (Number(word) || Number(word) === 0) {
      stack.push(Number(word));
      continue;
    }

    const num2 = stack.pop();
    const num1 = stack.pop();
    let res;

    switch (word) {
      case '+':
        res = num1 + num2;
        break;
      case '-':
        res = num1 - num2;
        break;

      case '*':
        res = num1 * num2;
        break;

      case '/':
        res = num1 / num2;
        break;
    }

    stack.push(res);
  }

  const res = stack.pop();
  return res;
}
