/**
Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and returns its sum and prints the subarray.

Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4] Output:6 
Explanation: [4,-1,2,1] has the largest sum = 6. 

Examples 2:

Input: arr = [1] Output:1 
Explanation:Array has only one element and which is giving positive sum of 1. 
 */

// Brute
// Do a three loops, where third loop is used to find the sum from provided start to end index
// Calculate sum for each interval and compare with max sum

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubArrayBrute = (arr) => {
  let n = arr.length;
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(maxSubArrayBrute(arr));

// T.C => O (N^3)
// S.c => O (1)

// Better
// From Brute approach, Since we are taking element one by one in inner loop the third loop is not required

const maxSubArrayBetter = (arr) => {
  let n = arr.length;
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
  }
  return maxSum;
};

console.log(maxSubArrayBetter(arr));

// T.C => O (N^2)
// S.c => O (1)

// Optimal - Kadanes Algorithm
// Loop the array and add it to the sum,
// if the sum is less than zero then it will be useful to maximize the subarray sum so reset sum to 0

const maxSubArrayOptimal = (arr) => {
  let sum = 0;
  let maxSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
    if (sum < 0) {
      sum = 0;
    }
    maxSum = Math.max(sum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArrayOptimal(arr));
// T.C => O (N) 
// S.c => O (1)