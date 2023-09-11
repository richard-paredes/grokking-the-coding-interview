import { test, expect } from "bun:test";
import { non_repeat_substring } from "./longestSubstringWithAllDistinctChars";

test.each([
  ["aabccbb", 3],
  ["abbbb", 2],
  ["abccde", 3],
])("non_repeat_substring", (str, expectedResult) => {
  const result = non_repeat_substring(str);
  expect(result).toBe(expectedResult);
});
