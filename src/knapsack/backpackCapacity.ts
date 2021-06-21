import { validatePositiveCapacity, validatePositiveNumbers } from './helper';
import { fillDPTableWithSums, getSelectedItems } from './mainAlgo';

/**
 * Uses main DP algo
 *
 * @param profits Array of item's profits
 * @param weights Array of item's weights
 * @param capacity Backpack's capacity
 * @returns Maximum profit of items in backpack and selected items
 */
export const getMaxProfit = (profits: number[], weights: number[], capacity: number) => {
  validatePositiveCapacity(capacity);
  validatePositiveNumbers(profits, "profits");
  validatePositiveNumbers(weights, "weights");

  let dp = fillDPTableWithSums(profits, weights, capacity);
  return {
    maxProfit: dp[capacity][profits.length - 1],
    selectedItems: getSelectedItems(dp, weights, capacity),
  };
};
