import { numberOfSubsetsWithSum } from '../numberOfSubsetsWithSum';

describe('Number of subsets that gives required sum', () => {
  test.each([
    [[3, 4, 5, 6], 5, 1],
    [[3, 4, 5, 6], 7, 1],
    [[3, 4, 5, 6], 9, 2],
    [[1, 1, 2, 3], 4, 3],
    [[1, 2, 7, 1, 5], 9, 3],
  ])(
    'should return proper number of ways to create a set with given sum',
    (numbers: number[], requiredSum: number, expectedNumberOfSubsets: number) => {
      let actualResult = numberOfSubsetsWithSum(numbers, requiredSum);
      expect(actualResult).toBe(expectedNumberOfSubsets);
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => numberOfSubsetsWithSum([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => numberOfSubsetsWithSum([1], 0)).toThrow('Capacity should be positive number');
  });
});
