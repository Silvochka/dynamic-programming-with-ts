import { unlimitedItemsBackpackCapacity } from '../unlimitedItemsBackpackCapacity';

describe('Backpack capacity with unlimited number of items each type', () => {
  test.each([
    [[1, 2, 3], [15, 20, 50], 5, 80, [0, 0, 2]],
    [[1, 2, 3], [15, 20, 50], 4, 65, [0, 2]],
    [[1, 2, 3], [15, 20, 50], 3, 50, [2]],
    [[1, 2, 3], [15, 20, 50], 2, 30, [0, 0]],
    [[1, 2, 3], [15, 20, 50], 1, 15, [0]],
  ])(
    'should return proper max profit and selected items',
    (weights: number[], profits: number[], capacity, expectedMaxProfit, expectedSelectedItems: number[]) => {
      let actualResult = unlimitedItemsBackpackCapacity(profits, weights, capacity);
      expect(actualResult.maxProfit).toBe(expectedMaxProfit);
      expect(actualResult.selectedItems.sort()).toStrictEqual(expectedSelectedItems.sort());
    },
  );

  it('should throw an error if number of weights and profits are not the same', async () => {
    expect(() => unlimitedItemsBackpackCapacity([], [1], 1)).toThrow('Number of weights and profits should be the same');
  });

  it('should throw an error if capacity is not positive number', async () => {
    expect(() => unlimitedItemsBackpackCapacity([], [], 0)).toThrow('Capacity should be positive number');
  });
});
