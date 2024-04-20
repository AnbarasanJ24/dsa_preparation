/**
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. 
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
prices = [7,1,5,3,6,4] Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

Example 2:
prices = [7,6,4,3,1] Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

// Brute
// Do two loops, take a element and check with all other element to find profit
// Check the profit is greater than max profit

const arr = [7, 1, 5, 3, 6, 4];
const buySellBrute = (arr) => {
  let maxProfit = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        const currentProfit = arr[j] - arr[i];
        if (currentProfit > maxProfit) {
          maxProfit = currentProfit;
        }
      }
    }
  }
  return maxProfit;
};

console.log(buySellBrute(arr));
// T.C => O (N^2)
// S.c => O (1)

// Optimal
// Consider the first element as min, start loop from second element
// consider for every element on loop, we need to sell and get a profit
// To get good profit, we need to buy on min value so always maintain the min value of [0 to i-1]

const buySellOptimal = (arr) => {
  let maxProfit = 0;
  let min = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    const currentProfit = arr[i] - min;
    maxProfit = Math.max(currentProfit, maxProfit);
    min = Math.min(arr[i], min);
  }
  return maxProfit;
};
console.log(buySellOptimal(arr));
// T.C => O (N)
// S.c => O (1)
