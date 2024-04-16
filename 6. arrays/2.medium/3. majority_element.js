/**
Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array.
You may consider that such an element always exists in the array.

Example 1:
N = 3, nums[] = {3,2,3} O/P : 3
Explanation: When we just count the occurrences of each number and compare with half of the size of the array, 
you will get 3 for the above solution. 
Example 2:
N = 7, nums[] = {2,2,1,1,1,2,2} O/P: 2

Example 3:
N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4} O/P: 4
*/

// Brute
// Do two loops to check each element count
// After complete inner iteration chech the count is greater than N/2, is fo return it

const arr = [2, 2, 1, 1, 1, 2, 2];
const majorityElementBrute = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (count > Math.floor(arr.length / 2)) return arr[i];
  }
  return -1;
};
// T.C => O (N^2)
// S.c => O (1)

console.log(majorityElementBrute(arr));

// Better
// Loop the array and mark its frequency using map
// Loop the map and check each element frequnecy, whichever element frequency is greater than N/2 then return it

const majorityElementBetter = (arr) => {
  const freqMap = new Map();
  for (let num of arr) {
    if (freqMap.has(num)) {
      freqMap.set(num, freqMap.get(num) + 1);
    } else {
      freqMap.set(num, 1);
    }
  }
  for (let [element, frequency] of freqMap.entries()) {
    if (frequency > Math.floor(arr.length / 2)) return element;
  }
  return -1;
};

console.log(majorityElementBetter(arr));
// T.C => O (N) + O (N) [Worst case all the elements are added to the map , unique elements]
// S.c => O (N)

// Optimal - Moores Voting Algorithm
// This is same like election, take a element assume as majority one and check its votes [counts]
// If the same element appears increase the votes, in case of different element decrease the votes
// Once the count becomes zero then till that point there is no majority element. so restart the entrie above steps
// Verify the majority element is greater than N/2 also

const majorityElementOptimal = (arr) => {
  let majority = 0;
  let votes = 0;

  for (let i = 0; i < arr.length; i++) {
    if (votes == 0) {
      majority = arr[i];
      votes++;
    } else if (arr[i] === majority) {
      votes++;
    } else votes--;
  }
  //   The below verification is required only the problem there might of majority element else not required
  let count = 0;
  for (let num of arr) {
    if (num === majority) count++;
  }
  if (count > Math.floor(arr.length / 2)) {
    return majority;
  }
  return -1;
};

console.log(majorityElementOptimal(arr));
// T.C => O (2N)
// S.c => O (1)
