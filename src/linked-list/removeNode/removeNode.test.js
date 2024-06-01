import { expect, test } from 'vitest';
import { removeNode } from './removeNode';
import { Node } from '../node';

test('removeNode', () => {
  const node3 = new Node('node3');
  const node2 = new Node('node2', node3);
  const node1 = new Node('node1', node2);
  const node0 = new Node('node0', node1);
  const updatedNodeHead = removeNode(node0, 1);

  let curNode = updatedNodeHead;
  let nodesNames = '';
  while (curNode) {
    nodesNames += `${curNode.value} `;
    curNode = curNode.next;
  }

  expect(nodesNames.trim()).toBe('node0 node2 node3');
});
