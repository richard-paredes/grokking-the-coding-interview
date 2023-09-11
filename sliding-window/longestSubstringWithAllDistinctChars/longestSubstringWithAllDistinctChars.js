/**
 *
 * @param {String} str
 * @returns The length of the longest substring, which has all distinct characters.
 */
export const non_repeat_substring = (str) => {
  let [maxSubstringLength, windowStart, windowEnd] = [-1, 0, 0];
  /** @type {Set<String>} */
  const distinctCharacters = new Set();
  while (windowEnd < str.length) {
    const currentCharacter = str[windowEnd];
    while (distinctCharacters.has(currentCharacter)) {
      const previousCharacter = str[windowStart];
      distinctCharacters.delete(previousCharacter);
      windowStart += 1;
    }
    distinctCharacters.add(currentCharacter);
    maxSubstringLength = Math.max(
      maxSubstringLength,
      windowEnd - windowStart + 1
    );
    windowEnd += 1;
  }
  return maxSubstringLength;
};
