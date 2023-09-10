/**
 *
 * @param {Number} s
 * @param {Array<Number>} arr
 * @returns The length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’
 */
export const smallest_subarray_sum = function (s, arr) {
  let minSubarrayLength = arr.length;
  let windowStart = 0,
    windowEnd = 0;
  let ongoingSum = 0;
  /**
   * 7, [2,1,5,2,8]
   * End=0 < 5 -> Sum=2
   * End=1 < 5 -> Sum=3
   * End=2 < 5 -> Sum=8 -> Min(5,2-0+1) -> Sum=6 | Start=1
   * End=3 < 5 -> Sum=8 -> Min(3,3-1+1) -> Sum=7 | Start=2
   * End=4 < 5 -> Sum=15 -> Min(3,4-2+1) -> Sum=10 | Start=3 -> Min(3,4-3+1) -> Sum=8 | Start = 4
   */
  while (windowEnd < arr.length) {
    ongoingSum += arr[windowEnd];
    while (ongoingSum >= s && windowEnd >= windowStart) {
      minSubarrayLength = Math.min(
        minSubarrayLength,
        windowEnd - windowStart + 1
      );
      ongoingSum -= arr[windowStart];
      windowStart += 1;
    }
    windowEnd += 1;
  }

  return minSubarrayLength;
};
