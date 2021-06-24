import { validateNonNegativeNumbers } from '../helpers/helper';

/**
 * Given array of numbers
 * Each number defines how long we can jump from this step
 *
 * Need to identify what is the minimum number of jumps needed to reach the end of the array
 *
 * Solution
 * Let fill the array
 * We will go by every element and for every step that we can reach from here
 *  we will fill it with Min(current value, value in originative step + 1)
 * F.e. if from step #1 we can jump 2 - we will fill next 2 steps with value from step #1 + 1
 *  ot we will leave as is if this value is smaller
 *
 * @param steps Array with number of jumps can b made from each step
 * @returns Minimum jumps needed to reach the top
 */
export function minimumJumpsToTop(steps: number[]): number {
  if (steps.length <= 0) {
    return 0;
  }

  validateNonNegativeNumbers(steps, 'steps');

  let jumps: number[] = [0];

  for (let i = 0; i < steps.length - 1; i++) {
    for (let j = i + 1; j < Math.min(steps.length, i + steps[i] + 1); j++) {
      if (jumps[j]) {
        jumps[j] = Math.min(jumps[j], jumps[i] + 1);
      } else {
        jumps[j] = jumps[i] + 1;
      }
    }
  }

  return jumps[jumps.length - 1];
}
