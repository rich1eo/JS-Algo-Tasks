export function reverseDoublyLinkedList(node) {
  let curNode = node;
  let curHead = node;

  while (curNode) {
    const prev = curNode.prev || null;
    const next = curNode.next || null;
    curNode.next = prev;
    curNode.prev = next;

    curHead = curNode;
    curNode = curNode.prev;
  }

  return curHead;
}
