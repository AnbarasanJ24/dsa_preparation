/**
Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions.
( Expected: Single pass-O(N) and constant space)

Input:
nums = [2,0,2,1,1,0] Output: [0,0,1,1,2,2]

Input:
nums = [2,0,1] Output: [0,1,2]
*/

const arr = [2, 0, 2, 1, 1, 0];

// Brute - Just sort the array

const sortarrBrute = (arr) => {
  return arr.sort((a, b) => a - b);
};

console.log(sortarrBrute(arr));

// T.C => O (N log N)
// S.c => O (N)

// Better
// Loop the array and count the no of zero, one and twos
// Loop the counts and push the respective elements

const sortarrBetter = (arr) => {
  let zeroCount = 0;
  let onesCount = 0;
  let twosCount = 0;

  for (let val of arr) {
    if (val === 0) zeroCount++;
    if (val === 1) onesCount++;
    if (val === 2) twosCount++;
  }
  let index = 0;
  while (zeroCount > 0) {
    arr[index] = 0;
    zeroCount--;
    index++;
  }
  while (onesCount > 0) {
    arr[index] = 1;
    onesCount--;
    index++;
  }
  while (twosCount > 0) {
    arr[index] = 2;
    twosCount--;
    index++;
  }
  return arr;
};

console.log(sortarrBetter(arr));
// T.C => O (N) +  O (N) - First for loop + 3 while loops
// S.c => O (1)

// Optimal
// Create low, mid and high pointers, where 0 lies with 0 to low-1
// 1 lies with low to mid -1, 2 lies with high+1 to N-1
// Mid to high carries the unsorted array

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
const sortarrOptimal = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid < high) {
    if (arr[mid] == 0) {
      swap(arr, low, mid);
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      swap(arr, mid, high);
      high--;
    }
  }
  return arr;
};

console.log(sortarrOptimal(arr));
// T.C => O (N)
// S.c => O (1)
