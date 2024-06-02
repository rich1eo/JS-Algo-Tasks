export class Queue {
  constructor(max_size) {
    this.queue = new Array(max_size).fill(null);
    this.head = 0;
    this.tail = 0;
    this.max_size = max_size;
    this.sizeOfQueue = 0;
  }

  push(x) {
    if (this.sizeOfQueue === this.queue.length) {
      return 'error';
    }

    this.queue[this.tail] = x;
    this.tail = (this.tail + 1) % this.max_size;
    this.sizeOfQueue += 1;
  }

  pop() {
    if (!this.sizeOfQueue) {
      return 'None';
    }

    const popValue = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.max_size;
    this.sizeOfQueue -= 1;

    return popValue;
  }

  peek() {
    if (!this.sizeOfQueue) {
      return 'None';
    }

    return this.queue[this.head];
  }

  size() {
    return this.sizeOfQueue;
  }
}
