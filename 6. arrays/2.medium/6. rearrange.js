/**
There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. 
Without altering the relative order of positive and negative elements,
you must return an array of alternately positive and negative values.

Note: Start the array with positive elements.

Example 1:

Input:
arr[] = {1,2,-4,-5}, N = 4
Output: 1 -4 2 -5

Explanation: 

Positive elements = 1,2
Negative elements = -4,-5
To maintain relative ordering, 1 must occur before 2, and -4 must occur before -5.

Example 2:
Input: arr[] = {1,2,-3,-1,-2,-3}, N = 6
Output: 1 -3 2 -1 3 -2 
Explanation: 

Positive elements = 1,2,3
Negative elements = -3,-1,-2
To maintain relative ordering, 1 must occur before 2, and 2 must occur before 3.
Also, -3 should come before -1, and -1 should come before -2.


 */

const arr = [3, 1, -2, -5, 2, -4];

// Brute
// Loop the array and check each element to identify & push to either pos or neg array
// Loop the pos and neg array and place the elements on arr

const rearrangeBrute = (arr) => {
  let pos = [];
  let neg = [];

  for (let val of arr) {
    if (val < 0) neg.push(val);
    else pos.push(val);
  }
  for (let i = 0; i < pos.length; i++) {
    arr[i * 2] = pos[i];
    arr[i * 2 + 1] = neg[i];
  }
  return arr;
};

console.log(rearrangeBrute(arr));
// T.C => O (N) + O(N/2) => O(2N)
// S.c => O (N/2)+ O(N/2) => O(N)

// Optimal
// Create a result array same length as given array and keep pos and neg pointer
// Loop the given array, if the element is pos then store it in result array using pos pointer and update pos pointer index by 2
// Repeat the same process for negative value

const rearrangeOptimal = (arr) => {
  let result = [];
  let posIndex = 0;
  let negIndex = 1;

  for (let val of arr) {
    if (val < 0) {
      result[negIndex] = val;
      negIndex += 2;
    } else {
      result[posIndex] = val;
      posIndex += 2;
    }
  }
  return result;
};

console.log(rearrangeOptimal(arr));
// T.C => O (N)
// S.c => O (N)

// Variety - 2
// In this case, there can be any no of pos and negative value it may or mat not be same
// Use the brute force approach to solve till the same length i.e pos 4 elements, neg 2 elements, solve till 2 elements
// post that push the remaining value to the result

const arr1 = [1, 2, -4, -5, 3, 4];

const rearrangeVariety2 = (arr) => {
  let pos = [];
  let neg = [];

  for (let val of arr) {
    if (val < 0) neg.push(val);
    else pos.push(val);
  }
  let posSize = pos.length;
  let negSize = neg.length;

  if (posSize > negSize) {
    for (let i = 0; i < negSize; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = negSize * 2;

    for (let i = negSize; i < posSize; i++) {
      arr[index] = pos[i];
      index++;
    }
  } else {
    for (let i = 0; i < posSize; i++) {
      arr[i * 2] = pos[i];
      arr[i * 2 + 1] = neg[i];
    }
    let index = posSize * 2;

    for (let i = posSize; i < negSize; i++) {
      arr[index] = neg[i];
      index++;
    }
  }
  return arr;
};

// T.C => O (N) + O(Min(pos, neg)) + O(leftover)
// For O(Min(pos, neg)) + O(leftover) case, let keep 4 pos & 0 negative so O(Min(pos,neg)) => O(0) + leftover will be O(N)
// T.c => O(2 N)
// S.c => O(N)

console.log(rearrangeVariety2(arr1));
