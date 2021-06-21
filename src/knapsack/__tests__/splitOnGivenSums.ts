import { splitOnGivenSums } from '../splitOnGivenSums';

describe('Split on given sums', () => {
  test.each([
    [[3, 4, 5, 6], 5, [5]],
    [[3, 4, 5, 6], 7, [3, 4]],
    [[1, 4, 5, 11], 10, [1, 4, 5]],
    [[3, 7, 1, 1], 6, []],
  ])('should return proper subset of items', (numbers: number[], requiredSum: number, expectedSubSets: number[]) => {
    let actualResult = splitOnGivenSums(numbers, requiredSum);
    expect(actualResult.sort()).toStrictEqual(expectedSubSets.sort());
  });

  it('should throw an error if any number is negative', async () => {
    expect(() => splitOnGivenSums([-1], 5)).toThrow('All numbers should be positive');
  });

  it('should throw an error if requested sum is not positive number', async () => {
    expect(() => splitOnGivenSums([4], -5)).toThrow('Capacity should be positive number');
  });
});
