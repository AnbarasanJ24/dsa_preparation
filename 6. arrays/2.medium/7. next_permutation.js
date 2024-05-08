/**
Given an array Arr[] of integers, rearrange the numbers of the given array into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange to the lowest possible order (i.e., sorted in ascending order).

Example 1:
Input format: Arr[] = {1,3,2}
Output : Arr[] = {2,1,3}
Explanation: 
All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,13} , {2,3,1} , {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.

Example 2:

Input format: Arr[] = {3,2,1}
Output: Arr[] = {1,2,3}
Explanation: 
As we see all permutations of {1,2,3}, we find {3,2,1} at the last position. So, we have to return the topmost permutation.
 */

// Permutation of 3,1,2
// [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]

// Brute
// Generate all the permutation using Recursion (Refer the striver recursion series)
// Check the given permutation on the list and return the next value
// If there is no value then return the first value as fallback

// Optimal
// Find longer prefex match, because we need to find the next possible permutation which is greater than the given number
// E.g. 2 1 5 4 3 0 0, Here 2 is the longer prefix match, using the remaining number we can form a greater number
// But the same is not possible when we try other combination such as 2  1  5 where the remaining number will not be greater number than it

// Find the break point, where 2 1 5 4 3 0 0, here 1 is the breaking point
// Breaking point is when the current number lesser than next number on a increasing sequence

// For 1 as breaking point, we need to choose a number between 5 4 3 0 0  which comes in ones place
// Keep 5 will give higher value, so the value should be the first smallest among the all greatest value which is 3
// Swap 1 & 3

// Since we form the starting point as 2 3, now we need a smaller number out the remaining number
// We know from 5 there is increasing value, so reversing it will give smaller value
// Reverse the remaining number

const arr = [2, 1, 5, 4, 3, 0, 0];

const reverse = (arr, index1, index2) => {
  if (index1 === index2) return;
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  reverse(arr, index1 + 1, index2 - 1);
};

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const nextPermutationOptimal = (arr) => {
  let breakingPoint = -1;

  for (let index = arr.length - 2; index >= 0; index--) {
    if (arr[index] < arr[index + 1]) {
      breakingPoint = index;
      break;
    }
  }
  if (breakingPoint === -1) {
    reverse(arr, 0, arr.length - 1);
  }
  for (let index = arr.length - 1; index >= 0; index--) {
    if (arr[index] > arr[breakingPoint]) {
      swap(arr, breakingPoint, index);
      break;
    }
  }
  reverse(arr, breakingPoint + 1, arr.length - 1);
  return arr;
};

console.log(nextPermutationOptimal(arr))

// T.C => O (3N) - Two times for loop and one time for reversing
// S.C => O (1)