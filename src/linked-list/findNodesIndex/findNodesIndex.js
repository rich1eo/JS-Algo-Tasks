export function findNodesIndex(node, elem) {
  let index = 0;
  let curNode = node;

  while (curNode) {
    if (curNode.value === elem) {
      return index;
    } else {
      curNode = curNode.next;
      index++;
    }
  }

  return -1;
}
