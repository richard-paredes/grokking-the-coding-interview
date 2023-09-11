/**
 *
 * @param {Array<String>} fruits
 * @returns The maximum number of fruits in both baskets.
 */
export const fruits_into_baskets = (fruits) => {
  const MAX_UNIQUE_FRUITS = 2; // provided by problem statement
  let [maxNumberOfFruits, windowStart, windowEnd] = [-1, 0, 0];
  /** @type {Map<String, Number>} */
  const uniqueFruits = new Map();
  while (windowEnd < fruits.length) {
    const currentFruit = fruits[windowEnd];
    if (!uniqueFruits.has(currentFruit)) {
      uniqueFruits.set(currentFruit, 0);
    }
    const currentFruitCount = uniqueFruits.get(currentFruit) + 1;
    uniqueFruits.set(currentFruit, currentFruitCount);

    while (
      [...uniqueFruits.entries()].filter(([_, fruitCount]) => fruitCount > 0)
        .length > MAX_UNIQUE_FRUITS
    ) {
      const previousFruit = fruits[windowStart];
      const previousFruitCount = uniqueFruits.get(previousFruit) - 1;
      uniqueFruits.set(previousFruit, previousFruitCount);
      windowStart += 1;
    }
    maxNumberOfFruits = Math.max(
      maxNumberOfFruits,
      windowEnd - windowStart + 1
    );
    windowEnd += 1;
  }
  return maxNumberOfFruits;
};
