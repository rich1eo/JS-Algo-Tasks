import { Node } from '../../linked-list/node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.size) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  removeFromFront() {
    if (!this.size) {
      return 'error';
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.size--;

    return value;
  }
}

export class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  put(x) {
    this.list.append(x);
  }

  get() {
    return this.list.removeFromFront();
  }

  size() {
    return this.list.size;
  }
}
