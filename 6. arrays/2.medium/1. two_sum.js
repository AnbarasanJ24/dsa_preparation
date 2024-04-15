/**
Problem Statement: Given an array of integers arr[] and an integer target.

1st variant: Return YES if there exist two numbers such that their sum is equal to the target. 
Otherwise, return NO.
2nd variant: Return indices of the two numbers such that their sum is equal to the target.
Otherwise, we will return {-1, -1}.

Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

Example 1:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
Result: YES (for 1st variant)
       [1, 3] (for 2nd variant)
Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

Example 2:
Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
Result: NO (for 1st variant)
	[-1, -1] (for 2nd variant)
Explanation: There exist no such two numbers whose sum is equal to the target.

*/

// Brute Force
// Do a two loops, take one elemenent and check with all other elements to equalize the target
// In case of same element, skip it. Handle both Yes or No variant and returning index variant

// Here checking the elements twice will not be required, so we can ignore that by starting j = i+1

const arr = [2, 6, 5, 8, 11];
const target1 = 14;
const target2 = 15;

const twoSumBrute = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;

      if (arr[i] + arr[j] === target) {
        // return [i, j];
        return "YES";
      }
    }
  }
  //   return [];
  return "NO";
};

console.log(twoSumBrute(arr, target1));
console.log(twoSumBrute(arr, target2));

// T.C => O (N^2)
// S.c => O (1)

// For 2nd variant, the below better approach is optimal
const twoSumBetter = (arr, target) => {
  const elementMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const requiredElement = target - arr[i];
    if (elementMap.has(requiredElement)) {
      return [elementMap.get(requiredElement), i];
      //   return "YES";
    } else {
      elementMap.set(arr[i], i);
    }
  }
  return [];
  //   return "NO";
};

console.log(twoSumBetter(arr, target1));
console.log(twoSumBetter(arr, target2));

// T.C => O (N)
// S.c => O (N)

// Optimal [ Inform interviewer that original array will be modified]
// This below approach will work better for Yes or No variant
// Sort the array, so that lesser value will be at start and greater value at end
// Kep the pointer at start and end, check its sum equal to target
// If the sum value is less then we need more value so move start or for less value move end

const twoSumOptimal = (arr, target) => {
  arr.sort((a, b) => a - b); // O (N LogN)
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // O(N)
    if (arr[start] + arr[end] === target) {
      return "YES";
    } else if (arr[start] + arr[end] < target) {
      start++;
    } else {
      end--;
    }
  }
  return "NO";
};
console.log(twoSumOptimal(arr, target1));
console.log(twoSumOptimal(arr, target2));

// T.C => O (N) + O (N logN)
// S.c => O (1)
