import { fillDPTable, getSelectedItems } from './mainAlgo';
import { splitArrayByIndecies } from './helper';

/**
 * Splits array of positive numbers into 2 equal arrays
 * Uses main algo, based on fact that Capacity should be (sum of elements)/2
 * Weight and Profit of numbers are the same by the nature
 *
 * @param numbers Array of numbers to be splitted
 * @returns 2 subsets with equal sum
 */
export const splitOnEqualSums = (numbers: number[]) => {
  if (numbers.some((n) => n <= 0)) {
    throw new Error('All numbers should be positive');
  }

  let capacity = numbers.reduce((a, sum) => a + sum);
  if (capacity % 2 == 1) {
    return [[], []];
  }

  capacity /= 2;

  let dp = fillDPTable(numbers, numbers, capacity);
  if (dp[capacity][numbers.length - 1] != capacity) {
    return [[], []];
  }

  return splitArrayByIndecies(numbers, getSelectedItems(dp, numbers, capacity));
};
