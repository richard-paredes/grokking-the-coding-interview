import { test, expect } from "bun:test";
import { fruits_into_baskets } from "./fruitsInBasket";

test.each([
  [["A", "B", "C", "B", "B", "C"], 5],
  [["A", "B", "C", "A", "C"], 3],
])("fruits_into_baskets", (fruits, expectedResult) => {
  const result = fruits_into_baskets(fruits);
  expect(result).toBe(expectedResult);
});
