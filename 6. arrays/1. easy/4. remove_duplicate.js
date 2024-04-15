/**

Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. 
The relative order of the elements should be kept the same.
If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. 
It does not matter what you leave beyond the first k elements.
Note: Return k after placing the final result in the first k slots of the array.

Example 1: 
Input: arr[1,1,2,2,2,3,3]
Output: arr[1,2,3,_,_,_,_]
Explanation: Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.

Example 2: 
Input: arr[1,1,1,2,2,3,3,3,3,4,4]
Output: arr[1,2,3,4,_,_,_,_,_,_,_]
Explanation: Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

 */

let arr = [1, 1, 2, 2, 2, 3, 3, 3];
// Brute
// Get unique value using set
// Loop each value in set and set inplace in source array
// Index will carry the length of the unique value

const removeDuplicate = (arr) => {
  let set = new Set();
  for (let index = 0; index < arr.length; index++) {
    set.add(arr[index]);
  }
  let index = 0;
  set.forEach((value) => {
    arr[index] = value;
    index++;
  });
  return index;
};

console.log(removeDuplicate(arr), arr);
// T.C => O (N Log N)for each N value set insertion will take log N time + N for looping the set
// S.c => O (N) for set

// Optimal
// In sorted array, duplicates will be immediate next to the current element
// Two pointer approach - i will maintain the unique values
// j will be used to check the value is unique or duplicate
// Take one element as i and check the next element value not equal to J then that is unique value

const removeDuplicates_1 = (arr) => {
  if (arr === null || arr.length === 1) return arr;
  //   Assume unique value index is 0
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    // Any value other than unique is also another unique value
    if (arr[j] != arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  return i+1;
};

// T.C => O (N)
// S.c => O (1)
