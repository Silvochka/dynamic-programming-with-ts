/**
 * Given staircase with N steps
 * Calculate number of ways to reach top if you can jump 1, 2, 3, ... m steps at once
 *
 * Solving by creating an array. On each step you can come from previous m steps, so need to calculate previous values of them
 *
 * @param steps Number of steps in the staircase
 * @param m max number of steps you cann jump at once
 * @returns Number of ways to reach top
 */
export function getNumberOfWaysToReachTopOfStaircase(steps: number, m: number): number {
  if (steps <= 0 || m <= 0) {
    return 0;
  }

  // first step doesn't count
  let ways = [1];

  for (let i = 1; i <= steps; i++) {
    ways[i] = ways.slice(Math.max(0, i - m), i + 1).reduce((a, sum) => a + sum);
  }

  return ways[steps];
}
