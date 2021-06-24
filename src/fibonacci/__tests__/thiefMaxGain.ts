import { getMaxGain } from '../thiefMaxGain';

describe('Home thief max gain', () => {
  test.each([
    [[], 0],
    [[0, 1], 1],
    [[2, 5, 1, 3, 6, 2, 4], 15],
    [[2, 10, 14, 8, 1], 18],
  ])('should calculate max gain of homes to steal', (gains: number[], expectedResult: number) => {
    expect(getMaxGain(gains)).toBe(expectedResult);
  });

  it('should throw an error if any number is negative', async () => {
    expect(() => getMaxGain([-1])).toThrow('All gains should be not negative');
  });
});
