/**
Given an array of size n, write a program to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order or not. 
If the array is sorted then return True, Else return False.
Note: Two consecutive equal values are considered to be sorted.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: True.
Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

Example 2:
Input: N = 5, array[] = {5,4,6,7,8}
Output: False.
Explanation: The given array is Not sorted i.e Every element in the array is not smaller than or equal to its next values, So the answer is False.
Here element 5 is not smaller than or equal to its future elements.

*/

let arr1 = [1, 5, 10, 20, 30];
let arr2 = [1, 5, 69, 10, 20];

// There is no brute, better approach
// Start from 1st element and make sure its previous element lesser or equal

const isSorted = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < arr[index - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isSorted(arr2));

// Optimal
// T.C => O (N)
// S.c => O (1)
