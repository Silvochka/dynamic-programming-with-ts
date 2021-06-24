import { minimumJumpsToTop } from '../minJumpsInStaircase';

describe('Min jumps till the top', () => {
  test.each([
    [[], 0],
    [[0], 0],
    [[2, 1, 1, 1, 4], 3],
    [[1, 1, 3, 6, 9, 3, 0, 1, 3], 4],
  ])('should calculate min jumps correctly', (steps: number[], expectedResult: number) => {
    expect(minimumJumpsToTop(steps)).toBe(expectedResult);
  });

  it('should throw an error if any number is negative', async () => {
    expect(() => minimumJumpsToTop([-1])).toThrow('All steps should be not negative');
  });
});
