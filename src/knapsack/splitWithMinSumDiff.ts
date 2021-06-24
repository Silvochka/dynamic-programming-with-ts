import { fillDPTableWithSums, getSelectedItems } from './mainAlgo';
import { splitArrayByIndecies, validatePositiveNumbers } from '../helpers/helper';

/**
 * Splits array of positive numbers into 2 arrays with minimal difference in their sums
 * Uses main algo, based on fact that Capacity should be close to the half of total sum
 * Weight and Profit of numbers are the same by the nature
 *
 * @param numbers Array of numbers to be splitted
 * @returns 2 subsets with mininal diff sum and these 2 subsets
 */
export const splitWithMinSumDiff = (numbers: number[]) => {
  validatePositiveNumbers(numbers, 'numbers');

  let capacity = numbers.reduce((a, sum) => a + sum);
  let halfCapacity = Math.floor(capacity / 2);

  let dp = fillDPTableWithSums(numbers, numbers, halfCapacity);
  let groupCapacity = dp[halfCapacity][numbers.length - 1];

  return {
    minSumDiff: capacity - 2 * groupCapacity,
    subSets: splitArrayByIndecies(numbers, getSelectedItems(dp, numbers, halfCapacity)),
  };
};
