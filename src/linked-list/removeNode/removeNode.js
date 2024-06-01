export function removeNode(node, index) {
  if (index === 0) {
    node = node.next;
    return node;
  }

  let pre = node;

  for (let i = 0; i < index - 1; i++) {
    console.log('pre pre', pre);
    pre = pre.next;
    console.log('pre aft', pre);
  }

  let after = pre.next.next || null;

  pre.next = after;

  return node;
}
