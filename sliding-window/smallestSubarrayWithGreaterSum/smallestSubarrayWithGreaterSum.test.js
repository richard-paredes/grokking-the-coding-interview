import { test, expect } from "bun:test";
import { smallest_subarray_sum } from "./smallestSubarrayWithGreaterSum";

test.each([
  [7, [2, 1, 5, 2, 3, 2], 2],
  [7, [2, 1, 5, 2, 8], 1],
  [8, [3, 4, 1, 1, 6], 3],
])("smallest_subarray_sum", (s, arr, expectedResult) => {
  const result = smallest_subarray_sum(s, arr);
  expect(result).toBe(expectedResult);
});
