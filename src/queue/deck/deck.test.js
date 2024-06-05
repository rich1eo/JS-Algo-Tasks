import { expect, test } from 'vitest';
import { Deck } from './deck';

test('deck', () => {
  let deck = new Deck(4);

  deck.pushFront(-855);
  console.log(deck.queue);
  deck.pushFront(0);

  console.log(deck.queue);

  expect(deck.popBack()).toBe(-855);
  expect(deck.popBack()).toBe(0);

  deck.pushBack(844);

  console.log(deck.queue);

  expect(deck.popBack()).toBe(844);
  deck.pushBack(823);
});
