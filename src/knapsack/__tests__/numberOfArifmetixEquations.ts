import { numberOfArifmetixEquations } from '../numberOfArifmetixEquations';

describe('Number of subsets that gives required sum with assigned + and -', () => {
  test.each([
    [[1, 1, 2, 3], 1, 3],
    [[1, 2, 7, 1], 9, 2],
  ])(
    'should return proper number of ways to assign + and - to get required sum',
    (numbers: number[], requiredSum: number, expectedNumberOfSubsets: number) => {
      let actualResult = numberOfArifmetixEquations(numbers, requiredSum);
      expect(actualResult).toBe(expectedNumberOfSubsets);
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => numberOfArifmetixEquations([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => numberOfArifmetixEquations([1], 0)).toThrow('Capacity should be positive number');
  });
});
