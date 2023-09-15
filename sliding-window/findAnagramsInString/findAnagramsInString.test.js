import { test, expect } from "bun:test";
import { find_string_anagrams } from "./findAnagramsInString";

test.each([["ppqp", "pq", [1, 2]]])(
  "find_string_anagrams",
  (str, pattern, expectedResult) => {
    const result = find_string_anagrams(str, pattern);
    expect(result).toEqual(expectedResult);
  }
);
