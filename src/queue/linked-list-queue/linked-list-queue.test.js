import { expect, test } from 'vitest';
import { LinkedListQueue } from './linked-list-queue';

test('linked-list-queue', () => {
  const queue = new LinkedListQueue();

  queue.put(-34);
  queue.put(-23);
  expect(queue.get()).toBe(-34);
  expect(queue.size()).toBe(1);
  expect(queue.get()).toBe(-23);
  expect(queue.size()).toBe(0);
  expect(queue.get()).toBe('error');
  expect(queue.get()).toBe('error');
  queue.put(80);
  expect(queue.size()).toBe(1);
});
