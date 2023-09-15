/**
 *
 * @param {String} str : String to search for substrings of _pattern_ anagrams
 * @param {String} pattern : String to be used for anagrams
 * @returns {Array<Number>} A list of starting indices of the anagrams of the pattern in the given string
 */
export const find_string_anagrams = function (str, pattern) {
  let [result_indexes, windowStart, windowEnd] = [[], 0, 0];

  /** @type {Map<String, Number>} */
  const characterFrequency = new Map();
  for (const character of pattern) {
    if (!characterFrequency.has(character))
      characterFrequency.set(character, 0);
    const frequency = characterFrequency.get(character) + 1;
    characterFrequency.set(character, frequency);
  }

  while (windowEnd < str.length) {
    const character = str[windowEnd];
    const previousCharacter = str[windowStart];
    console.warn(`Checking ${character}`);
    if (
      characterFrequency.has(character) &&
      characterFrequency.get(character) > 0
    ) {
      console.warn(`Character is part of anagram. Reducing frequency`);
      const reducedFrequency = characterFrequency.get(character) - 1;
      characterFrequency.set(character, reducedFrequency);
    } else {
      console.warn(`Anagram has been broken.`);
      if (
        character !== previousCharacter &&
        characterFrequency.has(previousCharacter)
      ) {
        console.warn(`Augmenting previous character frequencies`);
        const adjustedFrequency = characterFrequency.get(previousCharacter) + 1;
        characterFrequency.set(previousCharacter, adjustedFrequency);
      }
      windowStart += 1;
    }

    if (is_anagram(characterFrequency)) {
      console.warn(`Anagram has been found. Sliding window`);
      result_indexes.push(windowStart);
      windowStart += 1;
      const adjustedFrequency = characterFrequency.get(previousCharacter) + 1;
      characterFrequency.set(previousCharacter, adjustedFrequency);
    }
    console.warn("Current state: ", [...characterFrequency.entries()]);
    windowEnd += 1;
  }
  return result_indexes;
};

/**
 *
 * @param {Map<String, Number>} characterFrequency
 * @returns {Boolean}
 */
const is_anagram = (characterFrequency) => {
  return [...characterFrequency.values()].every((frequency) => frequency === 0);
};
