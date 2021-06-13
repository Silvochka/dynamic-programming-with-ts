import { splitOnEqualSums } from '../splitOnEqualSums';

describe('Split on equal sums', () => {
  test.each([
    [
      [3, 4, 5, 6],
      [
        [4, 5],
        [3, 6],
      ],
    ],
    [
      [1, 10, 5, 6],
      [
        [1, 10],
        [5, 6],
      ],
    ],
    [
      [1, 10, 6, 6],
      [[], []],
    ],
    [
      [4, 100, 2, 2],
      [[], []],
    ],
  ])('should return peroper max profit and selected items', (numbers: number[], expectedSubSets: number[][]) => {
    let actualResult = splitOnEqualSums(numbers);
    expect(actualResult[0].sort()).toStrictEqual(expectedSubSets[0].sort());
    expect(actualResult[1].sort()).toStrictEqual(expectedSubSets[1].sort());
  });

  it('should throw an error if any number is negative', async () => {
    expect(() => splitOnEqualSums([-1])).toThrow('All numbers should be positive');
  });
});
