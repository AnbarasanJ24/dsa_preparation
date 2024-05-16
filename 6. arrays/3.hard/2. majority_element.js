/**
Given an array of N integers. Find the elements that appear more than N/3 times in the array. 
If no such element exists, return an empty vector.

Example 1:

Input Format : N = 5, array[] = {1,2,2,3,2}
Result : 2
Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.

Example 2:

Input Format :  N = 6, array[] = {11,33,33,11,33,11}
Result: 11 33
Explanation: Here we can see that the Count(11) = 3 and Count(33) = 3. Therefore, the count of both 11 and 33 is greater than N/3 times. Hence, 11 and 33 is the answer.

*/

// Observation
// For size N=8, the majority element should be greater than 2 times
// Let assume a number greater than 2 times which is 3 then 3+3 will be less than 8
// Adding one more 3 will not be possible, so for any size the max majority element will be max 2 elements or min zero

// Brute
// Do two loops, take a element and check its appears on the array if so increase the count
// Before doing that make sure result array size ir zero is result array first element is not equal to current element
// Check the count greater than n/3 after the inner for loop and add the element to the list
// Since the result should be max 2 elements, break the for loop when the size greater than two

let arr = [1, 1, 1, 3, 3, 2, 2, 2];
let N = 8;
const majorityElementBrute = (arr, N) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (result.length === 0 || result[0] != arr[i]) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === arr[i]) {
          count++;
        }
      }
      if (count > Math.floor(N / 3)) {
        result.push(arr[i]);
      }
    }
    if (result.length === 2) break;
  }
  return result;
};

console.log(majorityElementBrute(arr, N));

// T.C => O (N^2)
// S.C => O (2) = To store the result

// Better
// Run a single loop and count the element frequency and store in Hash Map
// While calculating the frequency, check the element count is greater than N/3 and not present in result
// If so add to the result

const majorityElementBetter = (arr, N) => {
  let result = [];
  let map = new Map();
  // Variation -1
  //   for (let i = 0; i < arr.length; i++) {
  //     if (result.length === 0 || result[0] != arr[i]) {
  //       if (map.has(arr[i])) {
  //         let count = map.get(arr[i]) + 1
  //         map.set(arr[i], count);
  //         if(count > Math.floor(N/3)){
  //             result.push(arr[i])
  //         }
  //       }else{
  //         map.set(arr[i], 1)
  //       }
  //     }
  //     if (result.length === 2) break;
  //   }
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      let count = map.get(arr[i]) + 1;
      map.set(arr[i], count);
      //   when the element appears minimum (N/3)+1 times then we can add to the result
      //   Since we are increasing the count, this will happen only once so duplivcate will not be there
      if (count == Math.floor(N / 3) + 1) {
        result.push(arr[i]);
      }
    } else {
      map.set(arr[i], 1);
    }
  }
  return result;
};

console.log(majorityElementBetter(arr, N));

// T.C => O (N)
// S.C => O (N)

// Optimal
// This is the extension of majority element (N/2) where it has one solution
// For (N/3) problem we have two solutions, so keep two counters and check two elements
// Make sure element 1 and element 2 will not be same

const isMajorElement = (arr, el) => {
  let count = 0;
  for (let num of arr) {
    if (num === el) {
      count++;
      if (count > Math.floor(arr.length / 3)) {
        return true;
      }
    }
  }
  return false;
};

const majorityElementOptimal = (arr) => {
  let count1 = 0;
  let count2 = 0;
  let element1;
  let element2;
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (count1 == 0 && arr[i] != element2) {
      count1++;
      element1 = arr[i];
    } else if (count2 == 0 && arr[i] != element1) {
      count2++;
      element2 = arr[i];
    } else if (element1 === arr[i]) {
      count1++;
    } else if (element2 === arr[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }
  // if(isMajorElement(arr,element1)) result.push(element1);
  // if(isMajorElement(arr,element2)) result.push(element2);
  // return result;
  count1 = 0;
  count2 = 0;
  for (let num of arr) {
    if (num === element1) count1++;
    if (num === element2) count2++;
  }
  const minimum = Math.floor(arr.length / 3) + 1;
  if(count1 >= minimum) result.push(element1);
  if(count2 >= minimum) result.push(element2);
  return result;
};
console.log(majorityElementOptimal(arr, N));

// T.C => O (N) + O(N) => O(2N)
// S.C => O (1)