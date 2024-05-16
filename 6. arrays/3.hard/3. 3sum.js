/**
Given an array of N integers, your task is to find unique triplets that add up to give a sum of zero. 
In short, you need to return an array of all the unique triplets [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i,
and their sum is equal to zero.

Example 1:
nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Explanation:Out of all possible unique triplets possible, [-1,-1,2] and [-1,0,1] satisfy the condition of 
summing up to zero with i!=j!=k

Example 2:
nums=[-1,0,1,0]
Output: [[-1,0,1],[-1,1,0]]

Explanation:Out of all possible unique triplets possible, [-1,0,1] and [-1,1,0] satisfy the condition of 
summing up to zero with i!=j!=k
*/


// Brute
// Do three loops and add all three elements sum equal to zero or not
// Then store in a temp array and sort it to avoid duplicate
// Keep collecting all the triplets on asn variable and get unique from it using set
// Set will not support array uniqueness, so stringify the element and store it
// Parse it While retriving it back

const arr = [-1, 2, 1, 2, -1, -4];
const threesSumBrute = (arr) => {
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }
  let set = new Set(ans.map((el) => JSON.stringify(el)));
  ans = Array.from(set).map((el) => JSON.parse(el));
  return ans;
};

console.log(threesSumBrute(arr));

// T.C => O (N^3) * O (3) + O(No of triplets) - Three loops * sorting + looping triplets for removing duplicates
// S.C => O 2(No of triplets) - Store the ans array and set to remove tripletes

// Better
// We need to remove third loop using hashing or set
// Using two loops, we have two numbers so find the third one uisng arr[k] = - (arr[i]+arr[j])
// We can't loop the array and store in set at first, because it will give duplicate value.
// We need to make sure third element from hash will not be same as arr[i], arr[j]

const threesSumBetter = (arr) => {
  let resultSet = new Set();
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let set = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      let third = -(arr[i] + arr[j]);
      if (set.has(third)) {
        let triplet = [arr[i], arr[j], third];
        triplet.sort((a, b) => a - b);
        resultSet.add(JSON.stringify(triplet));
      }
      set.add(arr[j]);
    }
  }
  ans = Array.from(resultSet).map((el) => JSON.parse(el));
  return ans;
};

// T.C => O (N^2)* O(log M) - For ordered set
// S.C => O (N) (Set) + O (N) for ans

// Optimal
// Sort the array to make sure we are ignoring the duplicates
// Keep a constant pointer and two more pointer to track three elements
// Check if all three elements are equal to a zero if so triplet is found
// If the value is greater than zero then we need to decrease so move right pointer
// If the value is lesser then zero then we need to increase so move left pointer
// For constant, left or right pointer, before moving make sure the new element is not same as previous

const threesSumOptimal = (arr) => {
  let tripltes = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] != arr[i - 1]) continue;
    let constant = i;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[constant] + arr[left] + arr[right];
      if (sum === 0) {
        tripltes.push([arr[constant], arr[left], arr[right]]);
        left++;
        right--;
        while( left < right && num[left] === num[left-1]) j++;
        while( left < right && num[right] === num[right-1]) j++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return tripltes;
};

// T.C => O (N log N) (sorting) + O (N^2) 
// S.C => O (No of unique triplte) => For storing the result