import { splitWithMinSumDiff } from '../splitWithMinSumDiff';

describe('Split on subsets with min diff sums', () => {
  test.each([
    [
      [3, 4, 5, 6],
      0,
      [
        [4, 5],
        [3, 6],
      ],
    ],
    [
      [3, 4, 5, 7],
      1,
      [
        [4, 5],
        [3, 7],
      ],
    ],
    [[1, 2, 3, 9], 3, [[1, 2, 3], [9]]],
    [
      [1, 2, 7, 1, 5],
      0,
      [
        [1, 7],
        [1, 2, 5],
      ],
    ],
    [[1, 3, 100, 4], 92, [[1, 3, 4], [100]]],
  ])(
    'should return proper subset of items',
    (numbers: number[], expectedMinDiff: number, expectedSubSets: number[][]) => {
      let actualResult = splitWithMinSumDiff(numbers);
      expect(actualResult.minSumDiff).toBe(expectedMinDiff);
      expect(actualResult.subSets[0].sort()).toStrictEqual(expectedSubSets[0].sort());
      expect(actualResult.subSets[1].sort()).toStrictEqual(expectedSubSets[1].sort());
    },
  );

  it('should throw an error if any number is negative', async () => {
    expect(() => splitWithMinSumDiff([-1])).toThrow('All numbers should be positive');
  });
});
