/**
 *
 * @param {String} str - String to search for a substring that is a permutation of _pattern_
 * @param {String} pattern - String to search
 * @returns
 */
export const find_permutation = function (str, pattern) {
  let [windowStart, windowEnd] = [0, 0];

  /** @type {Map<String, Number>} */
  const patternCharacterFrequency = new Map();
  for (const char of pattern) {
    if (!patternCharacterFrequency.has(char))
      patternCharacterFrequency.set(char, 0);
    const frequency = patternCharacterFrequency.get(char) + 1;
    patternCharacterFrequency.set(char, frequency);
  }

  while (windowEnd < str.length) {
    const character = str[windowEnd];
    const isPartOfPermutation =
      patternCharacterFrequency.has(character) &&
      patternCharacterFrequency.get(character) > 0;
    if (isPartOfPermutation) {
      const characterFrequency = patternCharacterFrequency.get(character) - 1;
      patternCharacterFrequency.set(character, characterFrequency);
    }
    while (!isPartOfPermutation && windowStart < windowEnd) {
      const previousCharacter = str[windowStart];
      if (patternCharacterFrequency.has(previousCharacter)) {
        const revertedFrequency =
          patternCharacterFrequency.get(previousCharacter) + 1;
        patternCharacterFrequency.set(previousCharacter, revertedFrequency);
      }
      windowStart += 1;
    }
    if ([...patternCharacterFrequency.values()].every((freq) => freq === 0))
      return true;
    windowEnd += 1;
  }
  return false;
};
