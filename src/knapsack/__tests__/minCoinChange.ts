import { minCoinChange } from '../minCoinChange';

describe('Minimum number of coins to exchange the target', () => {
  test.each([
    [[1, 2, 3], 7, 3],
    [[1, 2, 3], 6, 2],
    [[1, 2, 3], 5, 2],
    [[1, 2, 3], 4, 2],
    [[1, 2, 3], 3, 1],
  ])(
    'should return proper minimum number of coins to exchange the target',
    (numbers: number[], requiredSum: number, expectedNumberOfSubsets: number) => {
      let actualResult = minCoinChange(numbers, requiredSum);
      expect(actualResult).toBe(expectedNumberOfSubsets);
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => minCoinChange([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => minCoinChange([1], 0)).toThrow('Capacity should be positive number');
  });
});
