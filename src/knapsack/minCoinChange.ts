import { fillDPTableWithMinimumNumberOfItemsUnlimitedItems } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from '../helpers/helper';

/**
 * Find minimum number of elements of subsets which gives sum of N (capacity). Each number can be used unlimited times
 *
 * @param numbers Array of numbers
 * @param target Sum that should be exchanged with coins
 * @returns Minimum number of coins to exchange the target sum
 */
export const minCoinChange = (numbers: number[], target: number) => {
  validatePositiveNumbers(numbers, 'numbers');
  validatePositiveCapacity(target);

  let dp = fillDPTableWithMinimumNumberOfItemsUnlimitedItems(numbers, target);
  return dp[target][numbers.length - 1];
};
