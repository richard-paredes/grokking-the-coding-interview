import { test, expect } from "bun:test";
import { length_of_longest_substring } from "./longestSubarraysWithOnesAfterReplacement";

test.each([
  [[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2, 6],
  [[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3, 9],
])("length_of_longest_substring", (arr, k, expectedResult) => {
  const result = length_of_longest_substring(arr, k);
  expect(result).toBe(expectedResult);
});
