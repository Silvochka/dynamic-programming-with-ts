# dynamic-programming-with-ts
Dynamic Programming patters implemented with ![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
 [![Build Status](https://api.travis-ci.com/Silvochka/dynamic-programming-with-ts.svg?branch=main)](https://travis-ci.com/github/Silvochka/dynamic-programming-with-ts) [![Coverage Status](https://coveralls.io/repos/github/Silvochka/dynamic-programming-with-ts/badge.svg?branch=main)](https://coveralls.io/github/Silvochka/dynamic-programming-with-ts?branch=main)

In this repo I'm going to collect families of Dynamic Programming problems and implement them in Typescript.

## Knapsack problems
**Bounded** Problems (each item in the list can be used only once): 
- Based on optimizing to some target:
  - [Backpack capacity](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/backpackCapacity.ts). Given list of items' weights and items' profits. Need to calculate max profit by given backpack's max capacity 
  - [Split array on equal sums](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/splitOnEqualSums.ts). **Hint**: weights = profits = array. Capacity = array sum / 2.
  - [Find subset of array that gives some sum](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/splitOnGivenSums.ts). **Hint**: weights = profits = array. Capacity = required sum. 
  - [Split array on 2 parts with min difference in their sums](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/splitWithMinSumDiff.ts). **Hint**: target capacity = array sum / 2. Result would be in bottom right cell. 
- Based on finding number of wayt to get the target
  - [Number of array subsets that gives required sum](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/numberOfSubsetsWithSum.ts).  
  - [Given array of positive numbers and required sum. Need to assign + and - for each number in array to sum of elements gives S.Return number of ways to do it](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/numberOfArifmetixEquations.ts). **Hint**: target capacity = (sum + array sum) / 2 based on 2 splitted halfs of the array: one positive, another negative. 

**Bounded** Problems (each item in the list can be used unlimited times): 
- [Original backpack with unlimited number of available items](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/unlimitedItemsBackpackCapacity.ts). 
- [Exchange sum based on unlimited number of available coins](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/unlimitedCoinChange.ts)
- [Minimum number of coins needed to exchange the sum](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/minCoinChange.ts)
- [Maximum number of coins needed to exchange the sum](https://github.com/Silvochka/dynamic-programming-with-ts/blob/main/src/knapsack/maxCoinChange.ts)
