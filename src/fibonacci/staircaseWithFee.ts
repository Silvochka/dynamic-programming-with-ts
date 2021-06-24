import { validateNonNegativeNumbers } from '../helpers/helper';

/**
 * Given staircase with N steps
 * Each Step has its own price to pay
 * You can go up on 1, 2 or 3 steps
 * Given you stand on the first step, find out what is the price to reach beyound the top most step
 *
 * Solution
 * Array will represent min price to reach this step
 *  based on min form previous 3 steps + price for current step
 *
 * @param fees Price of each step in the staircase
 * @returns Minimal fee to reach beyound the top
 */
export function minFeeStaircase(fees: number[]): number {
  if (fees.length <= 0) {
    return 0;
  }

  validateNonNegativeNumbers(fees, 'fees');

  if (fees.length <= 3) {
    return fees[0];
  }

  let feesMin: number[] = [fees[0]];

  for (let i = 1; i < fees.length; i++) {
    feesMin[i] = Math.min(...feesMin.slice(Math.max(0, i - 3), i)) + fees[i];
  }

  return Math.min(...feesMin.slice(-3));
}
