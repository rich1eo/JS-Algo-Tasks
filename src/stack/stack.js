class Stack {
  constructor() {
    this.items = [];
    this.maxValue = [];
  }

  push(item) {
    if (this.items.length === 0 || item >= this.maxValue.at(-1)) {
      this.maxValue.push(item);
    }
    this.items.push(item);
  }

  pop() {
    if (!this.items.length) {
      return 'error';
    }

    if (this.items.pop() === this.maxValue.at(-1)) {
      this.maxValue.pop();
    }
  }

  get_max() {
    if (!this.items.length) {
      return 'None';
    }

    return this.maxValue.at(-1);
  }

  top() {
    if (!this.items.length) {
      return 'error';
    }

    return this.items.at(-1);
  }
}

// const stack = new Stack();

// console.log('pop', stack.pop());
// console.log('pop', stack.pop());
// console.log('top', stack.top());
// stack.push(4);
// stack.push(-5);
// console.log('top', stack.top());
// stack.push(7);
// console.log('pop', stack.pop());
// console.log('pop', stack.pop());
// console.log('getMax', stack.get_max());
// console.log('top', stack.top());
// console.log('pop', stack.pop());
// console.log('getMax', stack.get_max());
