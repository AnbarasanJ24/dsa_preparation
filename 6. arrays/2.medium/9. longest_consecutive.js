/**
You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.
Example 1:

Input: [100, 200, 1, 3, 2, 4]
Output: 4
Explanation:The longest consecutive subsequence is 1, 2, 3, and 4.

Input: [3, 8, 5, 7, 6]
Output: 4
Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.
*/
const arr = [100, 102, 100, 101, 101, 4, 3, 2, 3, 3, 2, 1, 1, 1, 2];

// Brute
// Take a element and check its next value is available in the array (linear search)
// If so increase the count, increase the current value by 1 and check for longest seq
// By default any single digit will be longest, so keep longest as 1 by default

const longestConsecutive = (arr) => {
  let longest = 1;

  for (let index = 0; index < arr.length; index++) {
    let currentElement = arr[index];
    let count = 1;
    while (arr.includes(currentElement + 1)) {
      currentElement += 1;
      count += 1;
    }
    longest = Math.max(longest, count);
  }
  return longest;
};

console.log(longestConsecutive(arr));

// Better - Sort the array for keeping sequence
// Keep a previous variable to store the previous value of current elemnet in an array We have three case,
// If the current element is equal to previous, then move the pointer
// If the current element is one lesser than previous, then increase the count, update previous and check for longest
// If the current element is not equal to previous and current value is not one lesser than previous then reset it
// For reset, make the count = 0 and update the previous as current element

const longestConsecutiveBetter = (arr) => {
  arr.sort((a, b) => a - b);
  let currentCount = 1;
  let longest = 1;
  let previous = Number.MIN_SAFE_INTEGER;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === previous || arr[index] - 1 === previous) {
      if (arr[index] - 1 === previous) {
        currentCount += 1;
        previous = arr[index];
        longest = Math.max(currentCount, longest);
      }
    } else {
      currentCount = 1;
      previous = arr[index];
    }
  }
  return longest;
};

console.log(longestConsecutiveBetter(arr));

// T.C => O (N Log N) + O (N)
// S.C => O (N)

// Optimal - Assuming the set will take O(1) for insert and fetch else better soluttion will be good
// First loop the array and push the value to the Set
// Instead of checking the sequence for each element, frst make sure the element is not part of mid or last of the sequence
// Because mid or last sequnence will not be longest, we can find the same to check its previous element available in the set
// If there is previous element then it can't be a start it can be mid or last so ignore
// If its a start, then keep looking for its next element in the set and increase the count as well as check the longest or not

const longestConsecutiveOptimal = (arr) => {
  let set = new Set();
  if (arr.length === 0) return 0;
  let longest = 1;
  for (let val of arr) {
    set.add(val);
  }
  for (let val of set.values()) {
    if (!set.has(val - 1)) {
      let currentCount = 1;
      let start = val;
      while (set.has(start + 1)) {
        currentCount += 1;
        start += 1;
      }
      longest = Math.max(currentCount, longest);
    }
  }
  return longest;
};

console.log(longestConsecutiveOptimal(arr));

// T.C => O (N) + O (2N) => O (3N)
// Here we will not run while loop for every value, just checking only when its start so it take near to O (2N)
// S.C => O (N)
