import { fillDPTableWithMaximumNumberOfItemsUnlimitedItems } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from './helper';

/**
 * Find maximum number of elements of subsets which gives sum of N (capacity). Each number can be used unlimited times
 *
 * @param numbers Array of numbers
 * @param target Sum that should be exchanged with coins
 * @returns Minimum number of coins to exchange the target sum
 */
export const maxCoinChange = (numbers: number[], target: number) => {
  validatePositiveNumbers(numbers, 'numbers');
  validatePositiveCapacity(target);

  let dp = fillDPTableWithMaximumNumberOfItemsUnlimitedItems(numbers, target);
  console.log(dp);
  return dp[target][numbers.length - 1];
};
