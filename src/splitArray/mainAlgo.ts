/**
 * This is part of bottom-up solution of dynamic programming algorithm.
 *
 * Completed table has (capacity+1) rows: from 0 to capacity
 * and profits.length columns: for each element
 *
 * Table[c][i] represents the maximum profit for capacity `c` calculated for the first `i` items.
 *
 * Table initialized:
 * First row: always 0. For capacity = 0 nothing can be taken.
 * First column: Depends on first item's weight. > capacity ? 0 : weights[0]
 *
 * Then we go item by item and fill table for each capacity.
 * If item's weight won't fit into current capacity
 *  then we can't take it and use same profit based on same capacity from previous items
 *
 * Otherwise, we have 2 options: take this item or skip. We fill the table with maximum of these 2:
 * - take: profit[i] + profit of (capacity - weights[i]) for previouew i-1 items
 * - skip: same as item's weight won't fit into current capacity
 *
 * As the result, last column would contain maximum profits for each capacity from 0 to needed for all items.
 *
 * Space: O(N * C) where N - number of items. C - capacity. This is the size of dp table.
 * Speed: O(N * C), since we need to complete dp table.
 *
 * @param profits Array of item's profits
 * @param weights Array of item's weights
 * @param capacity Backpack's capacity
 * @returns Completed table of DP
 */
export const fillDPTableWithSums = (profits: number[], weights: number[], capacity: number): number[][] => {
  if (profits.length != weights.length) {
    throw new Error('Number of weights and profits should be the same');
  }

  let dp: number[][] = [];
  for (let i = 0; i <= capacity; i++) {
    dp[i] = [];
    dp[i].push(weights[0] <= i ? profits[0] : 0);
  }

  for (let i = 0; i < profits.length; i++) {
    dp[0][i] = 0;
  }

  for (let i = 1; i < profits.length; i++) {
    for (let cap = 1; cap <= capacity; cap++) {
      if (weights[i] > cap) {
        dp[cap][i] = dp[cap][i - 1];
      } else {
        dp[cap][i] = Math.max(dp[cap][i - 1], profits[i] + dp[cap - weights[i]][i - 1]);
      }
    }
  }

  return dp;
};

/**
 * SImilar to the algorithm above. It solves the task of
 * Find number of subsets which gives sum of N (capacity)
 *
 * We will build the same table with next difference:
 * dp[capacity][item index] is number of sets, sum of which gives capacity, for first $index elements in array
 *
 * Table initialized:
 * First row: always 1. For capacity = 0 we always can use empty set
 * First column: if first item == column's capacity, 0 otherwise
 *
 * Then we go item by item and fill table for each capacity.
 * If we skip this item, then dp[c][i] = dp[c][i-1]
 * If item is less than capacity, then we can add number of sets for dp[c - num[i]][i-1]
 *  which corresponds for subsets of previous items, for sum - this number capacity
 *
 * Space: O(N * C) where N - number of items. C - capacity. This is the size of dp table.
 * Speed: O(N * C), since we need to complete dp table.
 *
 * @param numbers Array of numbers
 * @param capacity Required capacity
 * @returns
 */
export const fillDPTableWithNumberOfSets = (numbers: number[], capacity: number): number[][] => {
  let dp: number[][] = [];
  for (let i = 0; i <= capacity; i++) {
    dp[i] = [];
    dp[i].push(numbers[0] == i ? 1 : 0);
  }

  for (let i = 0; i < numbers.length; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < numbers.length; i++) {
    for (let cap = 1; cap <= capacity; cap++) {
      dp[cap][i] = dp[cap][i - 1];
      if (numbers[i] <= cap) {
        dp[cap][i] += dp[cap - numbers[i]][i - 1];
      }
    }
  }

  return dp;
};

/**
 * Finds selected items based on completed DP table.
 *
 * Start with the bottom right cell.
 * If it is the same as profit for previous item, then it means that this item wasn't celeted. Move there (left)
 * Otherwise, this item is selected. Subtract remaining capacity and go up (item's weight) rows.
 *
 * Stop when reach zero capacity or first item
 *
 * @param dp Completed DP table
 * @param weights Array of item's weights
 * @param capacity Backpack's capacity
 * @returns Selected items's indecies in the backpack
 */
export const getSelectedItems = (dp: number[][], weights: number[], capacity: number): number[] => {
  if (dp.length != capacity + 1) {
    throw new Error(`DP table should has ${capacity + 1} rows, but has just ${dp.length}`);
  }

  if (dp[0].length != weights.length) {
    throw new Error(`DP table should has ${weights.length} columns, but has just ${dp[0].length}`);
  }

  let selectedItems = [];
  let currentCapacity = capacity;
  let currentItemIndex = weights.length - 1;
  while (currentCapacity > 0) {
    if (currentItemIndex == 0) {
      if (dp[currentCapacity][currentItemIndex] != 0) {
        selectedItems.push(currentItemIndex);
      }
      break;
    }

    if (dp[currentCapacity][currentItemIndex] != dp[currentCapacity][currentItemIndex - 1]) {
      selectedItems.push(currentItemIndex);
      currentCapacity -= weights[currentItemIndex];
    }

    currentItemIndex--;
  }

  return selectedItems;
};
