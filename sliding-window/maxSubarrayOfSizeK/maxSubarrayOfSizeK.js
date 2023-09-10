/**
 *
 * @param {number} k
 * @param {Array<number>} arr
 * @returns The maximum sum of any contiguous subarray of size ‘k’
 */
export const max_sub_array_of_size_k = (k, arr) => {
  if (arr.length < k) return -1;
  let currentMax = -1;
  let windowEnd = 0;
  let windowStart = 0;
  let ongoingSum = 0;

  while (windowEnd < arr.length) {
    ongoingSum += arr[windowEnd];
    if (windowEnd > k - 1) {
      ongoingSum -= arr[windowStart];
      windowStart += 1;
    }
    currentMax = Math.max(currentMax, ongoingSum);
    windowEnd += 1;
  }
  return currentMax;
};
