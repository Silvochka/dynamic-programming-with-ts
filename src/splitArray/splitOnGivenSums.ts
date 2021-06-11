import { fillDPTable, getSelectedItems } from './mainAlgo';

/**
 * Finds subset of array of positive numbers so sum is the requested sum
 * Uses main algo, based on fact that Capacity should be requested sum
 * Weight and Profit of numbers are the same by the nature
 *
 * @param numbers Array of numbers to be splitted
 * @param requiredSum Sum of subset which should be extracted from the array
 * @returns Subset of elements, sum of which gives required sum
 */
export const splitOnGivenSums = (numbers: number[], requiredSum: number) => {
  if (numbers.some((n) => n <= 0)) {
    throw new Error('All numbers should be positive');
  }

  if (requiredSum <= 0) {
    throw new Error('Requested sum should be positive number');
  }

  let dp = fillDPTable(numbers, numbers, requiredSum);
  if (dp[requiredSum][numbers.length - 1] != requiredSum) {
    return [];
  }

  return getSelectedItems(dp, numbers, requiredSum).map((i) => numbers[i]);
};
