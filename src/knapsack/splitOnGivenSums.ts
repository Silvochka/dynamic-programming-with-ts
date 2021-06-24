import { fillDPTableWithSums, getSelectedItems } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from '../helpers/helper';

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
  validatePositiveNumbers(numbers, 'numbers');
  validatePositiveCapacity(requiredSum);

  let dp = fillDPTableWithSums(numbers, numbers, requiredSum);
  if (dp[requiredSum][numbers.length - 1] != requiredSum) {
    return [];
  }

  return getSelectedItems(dp, numbers, requiredSum).map((i) => numbers[i]);
};
