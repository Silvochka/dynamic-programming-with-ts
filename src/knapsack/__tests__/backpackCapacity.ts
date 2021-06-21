import { getMaxProfit } from '../backpackCapacity';

describe('Backpack capacity', () => {
  test.each([
    [[2, 3, 1, 4], [4, 5, 3, 7], 5, 10, [2, 3]],
    [[2, 3, 1, 4], [3, 4, 5, 6], 5, 11, [2, 3]],
    [[2, 3, 1, 4], [3, 4, 5, 6], 6, 12, [0, 1, 2]],
    [[2, 3, 1, 4], [3, 4, 5, 6], 7, 14, [0, 2, 3]],
  ])(
    'should return proper max profit and selected items',
    (weights: number[], profits: number[], capacity, expectedMaxProfit, expectedSelectedItems: number[]) => {
      let actualResult = getMaxProfit(profits, weights, capacity);
      expect(actualResult.maxProfit).toBe(expectedMaxProfit);
      expect(actualResult.selectedItems.sort()).toStrictEqual(expectedSelectedItems.sort());
    },
  );

  it('should throw an error if number of weights and profits are not the same', async () => {
    expect(() => getMaxProfit([], [1], 1)).toThrow('Number of weights and profits should be the same');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => getMaxProfit([], [], 0)).toThrow('Capacity should be positive number');
  });

  it('should throw an error if any weight is negative', async () => {
    expect(() => getMaxProfit([-1], [1], 5)).toThrow('All profits should be positive');
  });

  it('should throw an error if any profit is negative', async () => {
    expect(() => getMaxProfit([1], [-1], 5)).toThrow('All weights should be positive');
  });
});
