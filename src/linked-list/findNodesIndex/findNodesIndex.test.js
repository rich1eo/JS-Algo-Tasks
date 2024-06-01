import { expect, test } from 'vitest';
import { Node } from '../node';
import { findNodesIndex } from './findNodesIndex';

test('findNodesIndex', () => {
  const node3 = new Node('node3');
  const node2 = new Node('node2', node3);
  const node1 = new Node('node1', node2);
  const node0 = new Node('node0', node1);
  const index = findNodesIndex(node0, 'node2');

  expect(index).toBe(2);
});
