import { expect, test } from "vitest";
import { movingAverage } from "./movingAverage";

test("movingAverage 1", () => {
  expect(movingAverage([1, 2, 3, 4, 5, 6, 7], 4)).toStrictEqual([
    2.5, 3.5, 4.5, 5.5,
  ]);
});

test("movingAverage 2", () => {
  expect(movingAverage([9, 3, 2, 0, 1, 5, 1, 0, 0], 3)).toStrictEqual([
    4.666666666666667, 1.6666666666666667, 1, 2, 2.3333333333333335, 2,
    0.3333333333333333,
  ]);
});
