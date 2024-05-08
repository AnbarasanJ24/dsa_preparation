/**
Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
N = 4, array[] = {3, 1, 2, 4}, k = 6
Result: 2
Explanation: The subarrays that sum up to 6 are [3, 1, 2] and [2, 4].

Example 2:
N = 3, array[] = {1,2,3}, k = 3
Result: 2
Explanation:The subarrays that sum up to 3 are [1, 2], and [3].

*/

const arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
let k = 3;

// Brute
// Do two loops, for every subarray run a separate loop and add the sum
// check sum is equal to k then increase the count

const countSubArrayBrute = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};
console.log(countSubArrayBrute([...arr], k));

// T.C => O (N ^ 3)(Near about N^3)
// S.C => O (1)

// Better
// Do two loops, add each element to the sum
// check sum is equal to k then increase the count

const countSubArrayBetter = (arr, k) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};
console.log(countSubArrayBetter([...arr], k));
// T.C => O (N ^2)
// S.C => O (1)

// Optimal
// We can calculate the prefix sum and create a map to store prefix sum and its count
// We can't find the subarray equal to k directly, so we are checking total sum - subarray sum available on the map
// If so there should be a subarray which equal to k

const countSubArrayOptimal = (arr, k) => {
  let map = new Map();
  map.set(0, 1);
  let prefixSum = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];
    count += map.get(prefixSum - k) || 0;
    map.set(prefixSum, map.get(prefixSum) + 1 || 1);
  }
  return count;
};

console.log(countSubArrayOptimal([...arr], k));
// T.C => O (N) For unordered map with no collision, O(N Log N) for worst case
// S.C => O (N)
