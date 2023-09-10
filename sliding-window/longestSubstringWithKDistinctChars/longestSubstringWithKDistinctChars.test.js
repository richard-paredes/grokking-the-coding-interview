import { test, expect } from "bun:test";
import { longest_substring_with_k_distinct } from "./longestSubstringWithKDistinctChars";

test.each([
  ["araaci", 2, 4],
  ["araaci", 1, 2],
  ["cbbebi", 3, 5],
  ["cbbebi", 10, 6],
])("longest_substring_with_k_distinct", (str, k, expectedResult) => {
  const result = longest_substring_with_k_distinct(str, k);
  expect(result).toBe(expectedResult);
});
