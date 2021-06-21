import { maxCoinChange } from '../maxCoinChange';

describe('Maximum number of coins to exchange the target', () => {
  test.each([
    [[2, 3, 5], 5, 2],
    [[2, 3], 7, 3],
    [[3, 5, 7], 13, 3],
  ])(
    'should return proper maximum number of coins to exchange the target',
    (numbers: number[], requiredSum: number, expectedNumberOfSubsets: number) => {
      let actualResult = maxCoinChange(numbers, requiredSum);
      expect(actualResult).toBe(expectedNumberOfSubsets);
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => maxCoinChange([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => maxCoinChange([1], 0)).toThrow('Capacity should be positive number');
  });
});
