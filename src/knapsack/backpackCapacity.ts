import { validatePositiveCapacity, validatePositiveNumbers } from '../helpers/helper';
import { fillDPTableWithSums, getSelectedItems } from './mainAlgo';

/**
 * Given list of items' weights and items' profits. Need to calculate max profit by given max capacity
 *
 * @param profits Array of item's profits
 * @param weights Array of item's weights
 * @param capacity Backpack's capacity
 * @returns Maximum profit of items in backpack and selected items
 */
export const getMaxProfit = (profits: number[], weights: number[], capacity: number) => {
  validatePositiveCapacity(capacity);
  validatePositiveNumbers(profits, 'profits');
  validatePositiveNumbers(weights, 'weights');

  let dp = fillDPTableWithSums(profits, weights, capacity);
  return {
    maxProfit: dp[capacity][profits.length - 1],
    selectedItems: getSelectedItems(dp, weights, capacity),
  };
};
