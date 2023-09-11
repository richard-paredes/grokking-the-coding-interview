import { test, expect } from "bun:test";
import { length_of_longest_substring } from "./longestSubstringWithSameLettersAfterReplacement";

test.each([
  ["aabccbb", 2, 5],
  ["abbcb", 1, 4],
  ["abccde", 1, 3],
])("length_of_longest_substring", (str, k, expectedResult) => {
  const result = length_of_longest_substring(str, k);
  expect(result).toBe(expectedResult);
});
