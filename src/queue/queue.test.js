import { expect, test } from 'vitest';
import { Queue } from './queue';

test('queue', () => {
  let q = new Queue(2);

  expect(q.peek()).toBe('None');

  q.push(5);
  q.push(2);

  expect(q.peek()).toBe(5);
  expect(q.size()).toBe(2);
  expect(q.size()).toBe(2);

  expect(q.push(1)).toBe('error');
  expect(q.size()).toBe(2);
});
