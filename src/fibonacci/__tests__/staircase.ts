import { getNumberOfWaysToReachTopOfStaircase } from '../staircase';

describe('Staircase problem', () => {
  test.each([
    [0, 1, 0],
    [1, 0, 0],
    [4, 3, 7],
    [5, 3, 13],
    [4, 4, 8],
    [5, 4, 15],
  ])(
    'should calculate number of ways to reach top of staircase',
    (steps: number, m: number, expectedResult: number) => {
      expect(getNumberOfWaysToReachTopOfStaircase(steps, m)).toBe(expectedResult);
    },
  );
});
