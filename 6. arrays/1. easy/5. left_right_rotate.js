/**
Given an array of N integers, left rotate the array by one place.

Example 1:
Input: N = 5, array[] = {1,2,3,4,5}
Output: 2,3,4,5,1
Explanation: 
Since all the elements in array will be shifted 
toward left by one so ‘2’ will now become the 
first index and and ‘1’ which was present at 
first index will be shifted at last.

Example 2:
Input: N = 1, array[] = {3}
Output: 3
Explanation: Here only element is present and so 
the element at first index will be shifted to 
last index which is also by the way the first index.

*/


let arr = [1, 2, 3, 4, 5];
// Output = [2,3,4,5,1]
// Take one element and keep it the right
// Then move all the element one step ahead

// Store that first element in temp [Which will be shifted to the right]
// Move the value from 1st index to 0th index, 2nd index to 1st index and so on
// At last keep the temp value as the last element

const leftRotate = (arr) => {
  let temp = arr[0];

  for (let index = 1; index < arr.length; index++) {
    arr[index - 1] = arr[index];
  }

  arr[arr.length - 1] = temp;
};
// leftRotate(arr);
// console.log(arr);


// T.C => O (N) 
// S.c => O (1)

const rightRotate =(arr)=>{
  let N = arr.length;
  let temp = arr[N-1];
  for(let index= N-1; index >=1 ; index--){
    arr[index] = arr[index-1]
  }
  arr[0]= temp;
}
rightRotate(arr);
console.log(arr);