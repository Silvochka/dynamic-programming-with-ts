import { getFibonacciNumber } from '../classicFibonacci';

describe('Classic fibonacci sequence', () => {
  test.each([
    [0, 0],
    [3, 2],
    [7, 13],
    [4, 3],
  ])('should calculate fibonacci sequence correctly', (n: number, expectedResult: number) => {
    expect(getFibonacciNumber(n)).toBe(expectedResult);
  });
});
