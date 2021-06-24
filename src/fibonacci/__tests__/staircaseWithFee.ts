import { minFeeStaircase } from '../staircaseWithFee';

describe('Staircase problem with fee', () => {
  test.each([
    [[], 0],
    [[0, 1, 2], 0],
    [[1, 2, 5, 2, 1, 2], 3],
    [[2, 3, 4, 5], 5],
  ])('should calculate min fee to reach beyoung the top', (fees: number[], expectedResult: number) => {
    expect(minFeeStaircase(fees)).toBe(expectedResult);
  });

  it('should throw an error if any number is negative', async () => {
    expect(() => minFeeStaircase([-1])).toThrow('All fees should be not negative');
  });
});
