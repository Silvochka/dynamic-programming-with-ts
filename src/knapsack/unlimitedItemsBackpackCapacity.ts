import { fillDPTableWithSumsWithUnlimitedItems, getSelectedItems } from './mainAlgo';

/**
 * Uses main DP algo, given the unlimited number of items for each type
 *
 * @param profits Array of item's profits
 * @param weights Array of item's weights
 * @param capacity Backpack's capacity
 * @returns Maximum profit of items in backpack and selected items
 */
export const unlimitedItemsBackpackCapacity = (profits: number[], weights: number[], capacity: number) => {
  if (capacity <= 0) {
    throw new Error('Capacity should be positive number');
  }

  let dp = fillDPTableWithSumsWithUnlimitedItems(profits, weights, capacity);
  return {
    maxProfit: dp[capacity][profits.length - 1],
    selectedItems: getSelectedItems(dp, weights, capacity, true),
  };
};
