import { unlimitedCoinChange } from '../unlimitedCoinChange';

describe('Number of ways to change the coin', () => {
  test.each([
    [[1, 2, 3], 5, 5],
  ])(
    'should return proper number of ways to create a set with given sum',
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
