import { splitArrayByIndecies } from '../helper';

describe('Array helper', () => {
  test.each([
    [
      [1, 2, 3, 4],
      [0, 1],
      [1, 2],
      [3, 4],
    ],
    [
      [1, 1, 3, 4],
      [0, 1],
      [1, 1],
      [3, 4],
    ],
    [[1, 1, 3, 4], [], [], [1, 1, 3, 4]],
    [[1, 1, 3, 4], [-1], [], [1, 1, 3, 4]],
    [[1, 2, 3, 4], [-1, 1], [2], [1, 3, 4]],
  ])(
    'should split arrays properly',
    (fullArray: number[], indecies: number[], expectedSelectedItems: number[], expectedNonSelectedItems: number[]) => {
      let actualResult = splitArrayByIndecies(fullArray, indecies);
      expect(actualResult[0]).toStrictEqual(expectedSelectedItems);
      expect(actualResult[1]).toStrictEqual(expectedNonSelectedItems);
    },
  );
});
