import { expect, test } from 'vitest';
import { DoublyNode } from '../doublyNode';
import { reverseDoublyLinkedList } from './reverseDoublyLinkedList';

test('reverseDoublyLinkedList', () => {
  const node3 = new DoublyNode('node3');
  const node2 = new DoublyNode('node2', node3);
  const node1 = new DoublyNode('node1', node2);
  const node0 = new DoublyNode('node0', node1);
  node1.prev = node0;
  node2.prev = node1;
  node3.prev = node2;
  const newHead = reverseDoublyLinkedList(node0);

  let curNode = newHead;
  let reversedListStr = '';
  while (curNode) {
    reversedListStr += `${curNode.value}.next === ${
      curNode.next?.value || null
    } | ${curNode.value}.prev === ${curNode.prev?.value || null} -> `;
    curNode = curNode.next;
  }

  const expectValue =
    'node3.next === node2 | node3.prev === null -> node2.next === node1 | node2.prev === node3 -> node1.next === node0 | node1.prev === node2 -> node0.next === null | node0.prev === node1 -> ';

  expect(reversedListStr).toBe(expectValue);
});
