import { fillDPTableWithNumberOfSets } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from '../helpers/helper';

/**
 * Finds number of subsets, sum of elements which gives requered sum
 * Works only for positive numbers
 *
 * @param numbers Array of numbers
 * @param requiredSum Sum of subset which should be extracted from the array
 * @returns Number of ways to do it
 */
export const numberOfSubsetsWithSum = (numbers: number[], requiredSum: number) => {
  validatePositiveNumbers(numbers, 'numbers');
  validatePositiveCapacity(requiredSum);

  let dp = fillDPTableWithNumberOfSets(numbers, requiredSum);

  return dp[requiredSum][numbers.length - 1];
};
