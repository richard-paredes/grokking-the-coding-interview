import { expect, test } from "bun:test";
import { max_sub_array_of_size_k } from "./maxSubarrayOfSizeK";

test("max_sub_array_of_size_k", () => {
  const result = max_sub_array_of_size_k(2, [1, 2, 3, 4]);
  expect(result).toBe(7);
});
