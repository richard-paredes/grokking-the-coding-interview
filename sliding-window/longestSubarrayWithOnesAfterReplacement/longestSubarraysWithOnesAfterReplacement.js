/**
 *
 * @param {Array<Number>} arr
 * @param {Number} k - Max number of 0's to replace with 1's
 * @returns {Number} The length of the longest contiguous subarray having all 1s
 */
export const length_of_longest_substring = function (arr, k) {
  let [maxSubarrayLength, currentReplacements, windowStart, windowEnd] = [
    -1, 0, 0, 0,
  ];

  while (windowEnd < arr.length) {
    const currentNumber = arr[windowEnd];
    if (currentNumber !== 1) {
      currentReplacements += 1;
    }
    while (currentReplacements > k) {
      const previousNumber = arr[windowStart];
      if (previousNumber !== 1) currentReplacements -= 1;
      windowStart += 1;
    }
    maxSubarrayLength = Math.max(
      maxSubarrayLength,
      windowEnd - windowStart + 1
    );
    windowEnd += 1;
  }

  return maxSubarrayLength;
};
