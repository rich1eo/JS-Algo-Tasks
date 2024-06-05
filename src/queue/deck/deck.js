export class Deck {
  constructor(maxSize) {
    this.queue = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  pushBack(x) {
    if (this.isFull) {
      return 'error';
    }

    this.queue[this.tail] = x;
    this.tail = (this.tail + 1) % this.maxSize;
    this.size += 1;
  }

  pushFront(x) {
    if (this.isFull) {
      return 'error';
    }

    this.head = (this.head - 1 + this.maxSize) % this.maxSize;
    this.queue[this.head] = x;
    this.size += 1;
  }

  popFront() {
    if (this.isEmpty) {
      return 'None';
    }

    const popValue = this.queue[this.head];
    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.maxSize;
    this.size -= 1;

    return popValue;
  }

  popBack() {
    if (this.isEmpty) {
      return 'None';
    }

    this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
    const popValue = this.queue[this.tail];
    this.queue[this.tail] = null;
    this.size -= 1;

    return popValue;
  }

  get isEmpty() {
    return this.size === 0;
  }

  get isFull() {
    return this.size === this.maxSize;
  }
}
