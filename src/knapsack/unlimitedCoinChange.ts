import { fillDPTableWithNumberOfSetsUnlimitedItems } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from './helper';

/**
 * Find number of subsets which gives sum of N (capacity). Each number can be used unlimited times
 *
 * @param numbers Array of numbers
 * @param target Sum that should be exchanged with coins
 * @returns Number of ways to exchange the target sum
 */
export const unlimitedCoinChange = (numbers: number[], target: number) => {
  validatePositiveNumbers(numbers, 'numbers');
  validatePositiveCapacity(target);

  let dp = fillDPTableWithNumberOfSetsUnlimitedItems(numbers, target);
  return dp[target][numbers.length - 1];
};
