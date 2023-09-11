/**
 *
 * @param {String} str
 * @param {Number} k - Nubmer of character replacements allowed
 * @returns {Number} The length of the longest substring having the same letters after replacement
 */
export const length_of_longest_substring = (str, k) => {
  let [maxSubstringLength, windowStart, windowEnd] = [-1, 0, 0];
  /** @type {String} */
  let mainCharacter = "";
  /** @type {Map<String, Number>} */
  const characterFrequencies = new Map();
  while (windowEnd < str.length) {
    const currentCharacter = str[windowEnd];
    if (mainCharacter === "") mainCharacter = currentCharacter;
    if (!characterFrequencies.has(currentCharacter)) {
      characterFrequencies.set(currentCharacter, 0);
    }
    const currentCharacterFrequency =
      characterFrequencies.get(currentCharacter) + 1;
    characterFrequencies.set(currentCharacter, currentCharacterFrequency);

    while (is_exceeding_replacements(characterFrequencies, mainCharacter, k)) {
      const previousCharacter = str[windowStart];
      const previousCharacterFrequency =
        characterFrequencies.get(previousCharacter) - 1;
      characterFrequencies.set(previousCharacter, previousCharacterFrequency);
      [mainCharacter] = get_most_frequency_character(characterFrequencies);
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

/**
 *
 * @param {Map<String, Number>} characterFrequencies
 * @param {String} mainCharacter
 * @param {Number} allowedReplacements
 */
const is_exceeding_replacements = (
  characterFrequencies,
  mainCharacter,
  allowedReplacements
) => {
  let unusedReplacements = allowedReplacements;
  for (const [char, charFreq] of characterFrequencies.entries()) {
    if (unusedReplacements < 0) break;
    if (char === mainCharacter) continue;
    unusedReplacements -= charFreq;
  }
  return unusedReplacements < 0;
};

/**
 *
 * @param {Map<String, Number>} characterFrequencies
 */
const get_most_frequency_character = (characterFrequencies) => {
  /** @type {[string, Number]} */
  let mostFrequencyCharacterEntry = ["", -1];
  for (const [
    currentCharacter,
    currentCharacterFrequency,
  ] of characterFrequencies.entries()) {
    const [_, frequency] = mostFrequencyCharacterEntry;
    if (currentCharacterFrequency > frequency) {
      mostFrequencyCharacterEntry = [
        currentCharacter,
        currentCharacterFrequency,
      ];
    }
  }

  return mostFrequencyCharacterEntry;
};
