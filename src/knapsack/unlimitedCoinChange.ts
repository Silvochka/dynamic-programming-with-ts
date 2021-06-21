import { fillDPTableWithNumberOfSetsUnlimitedItems, getSelectedItems } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from './helper';

/**
 * Uses main DP algo, given the unlimited number of items for each type
 *
 * @param numbers Array of numbers
 * @param target Sum that should be changed with coins
 * @returns Number of ways to change the target sum
 */
export const unlimitedCoinChange = (numbers: number[], target: number) => {
  validatePositiveNumbers(numbers, "numbers");
  validatePositiveCapacity(target);

  let dp = fillDPTableWithNumberOfSetsUnlimitedItems(numbers, target);
  return dp[target][numbers.length - 1];
};
