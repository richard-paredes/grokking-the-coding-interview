/**
 *
 * @param {String} str
 * @param {Number} k
 * @returns The length of the longest substring in it with no more than K distinct characters.
 */
export const longest_substring_with_k_distinct = (str, k) => {
  let [maxSubstringLength, windowStart, windowEnd] = [-1, 0, 0];

  /** @type {Map<string, Number>} */
  const seenCharacters = new Map();
  while (windowEnd < str.length) {
    const character = str[windowEnd];
    if (!seenCharacters.has(character)) {
      seenCharacters.set(character, 0);
    }
    const timesViewed = seenCharacters.get(character) + 1;
    seenCharacters.set(character, timesViewed);

    while (
      [...seenCharacters.entries()].filter(
        ([_, timesViewed]) => timesViewed > 0
      ).length > k
    ) {
      const prevCharacter = str[windowStart];
      const prevCharacterTimesViewed = seenCharacters.get(prevCharacter) - 1;
      seenCharacters.set(prevCharacter, prevCharacterTimesViewed);
      windowStart += 1;
    }

    maxSubstringLength = Math.max(
      maxSubstringLength,
      windowEnd - windowStart + 1
    );

    windowEnd += 1;
  }

  return maxSubstringLength;
};
