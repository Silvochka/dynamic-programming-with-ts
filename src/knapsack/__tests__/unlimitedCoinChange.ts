import { unlimitedCoinChange } from '../unlimitedCoinChange';

describe('Number of ways to exchange the coin', () => {
  test.each([
    [[1, 2, 3], 5, 5],
    [[1, 2, 3], 4, 4],
    [[1, 2, 3], 3, 3],
    [[1, 2, 3], 2, 2],
    [[1, 2, 3], 1, 1],
  ])(
    'should return proper number of ways to exchange the coin',
    (numbers: number[], requiredSum: number, expectedNumberOfSubsets: number) => {
      let actualResult = unlimitedCoinChange(numbers, requiredSum);
      expect(actualResult).toBe(expectedNumberOfSubsets);
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => unlimitedCoinChange([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => unlimitedCoinChange([1], 0)).toThrow('Capacity should be positive number');
  });
});
