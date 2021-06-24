import { validateNonNegativeNumbers } from '../helpers/helper';

/**
 * Given next of array that represents gain in each house
 * Theif can steal from some home only if he didn't steal by near by
 * so it could be like O X O X O or O O X O O X where X - stealed, O - not
 *
 * Solution
 * We will populate an array where i-th value means
 *  what is the max gain thief can get by this and all previous houses
 *
 * It is detemined as max of:
 *  skip this house - use gain from previous home
 *  stal from this one + gain from prev-previous one
 *
 * @param gains Gains in each house to steal
 * @returns Maximum gain to steal
 */
export function getMaxGain(gains: number[]): number {
  if (gains.length <= 0) {
    return 0;
  }

  validateNonNegativeNumbers(gains, 'gains');

  // if these is 1 or 2 homes - always steal from richier one
  if (gains.length < 3) {
    return Math.max(...gains);
  }

  // gain from first home is always max for the first home
  // for second one - max gain of both
  let maxGains: number[] = [gains[0], Math.max(gains[0], gains[1])];

  for (let i = 2; i < gains.length; i++) {
    maxGains[i] = Math.max(gains[i] + maxGains[i - 2], maxGains[i - 1]);
  }

  return maxGains[maxGains.length - 1];
}
