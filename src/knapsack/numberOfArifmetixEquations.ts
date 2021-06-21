import { fillDPTableWithNumberOfSets } from './mainAlgo';
import { validatePositiveCapacity, validatePositiveNumbers } from './helper';

/**
 * Given array of positive numbers and required sum
 * Need to assign + and - for each number in array to sum of elements gives S
 * Return number of ways to do it
 *
 * Here we can use DP table with number of sets, which gives required sum.
 * But which sum?
 *
 * Let say, p-set is set of numbers with "+" and n-set is set of numbers with "-"
 * SUM - function that returns sum of elements
 *
 * SUM(p-set) - SUM(n-set) = S
 * SUM(p-set) + SUM(n-set) = SUM(numbers)
 *
 * Add them together:
 * SUM(p-set) - SUM(n-set) + SUM(p-set) + SUM(n-set) = S + SUM(numbers)
 *
 * 2 * SUM(p-set) = S + SUM(numbers)
 *
 * It means, that we actually need to target SUM(p-set) = (S + SUM(numbers)) / 2
 *
 * @param numbers Array of numbers, which should get "+" or "-"
 * @param requiredSum Targeting sum, based on which we should assign + and -
 * @returns Number of ways to do it
 */
export const numberOfArifmetixEquations = (numbers: number[], requiredSum: number) => {
  validatePositiveCapacity(requiredSum);
  validatePositiveNumbers(numbers, 'numbers');

  let pSetSum = (requiredSum + numbers.reduce((a, sum) => a + sum)) / 2;
  let dp = fillDPTableWithNumberOfSets(numbers, pSetSum);

  return dp[pSetSum][numbers.length - 1];
};
