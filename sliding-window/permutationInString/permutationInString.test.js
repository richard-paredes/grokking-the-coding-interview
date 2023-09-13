import { test, expect } from "bun:test";
import { find_permutation } from "./permutationInString";

test.each([
  ["oidbcaf", "abc", true],
  ["odicf", "dc", false],
  ["bcdxabcdy", "bcdyabcdx", true],
  ["aaacb", "abc", true],
])("find_permutation", (str, pattern, expectedResult) => {
  const result = find_permutation(str, pattern);
  expect(result).toBe(expectedResult);
});
