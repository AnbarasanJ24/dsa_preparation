/**
Given a Matrix, print the given matrix in spiral order.

Example 1:

Input: Matrix[][] = [ { 1, 2, 3, 4 },{ 5, 6, 7, 8 },{ 9, 10, 11, 12 },{ 13, 14, 15, 16 } ]
Outhput: 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10.
Explanation: The output of matrix in spiral form.

Example 2:
Input: Matrix[][] = [ { 1, 2, 3 },{ 4, 5, 6 },{ 7, 8, 9 } ]
			    
Output: 1, 2, 3, 6, 9, 8, 7, 4, 5.
Explanation: The output of matrix in spiral form.
*/

// Optimal
// we dont have multiple solutions for ths problem
// Interview wants to check the implementation and clean code
// Keep top as first row, bottom as last row, left as first column and right as last column 
// Loop left to right keeping top as constant, and increase top
// Loop top to bottom keeping right as constant and increase right
// Since we are modify the top and right, we need to make safety check and perform the loops for other two sides 



const arr = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13,12, 11],
];

const spriralMatrix = (arr) => {
  let n = arr.length;
  let m = arr[0].length;
  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;
  let result = [];

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(arr[i][right]);
    }
    right--;
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
      }
      left++;
    }
  }
  return result
};

console.log(spriralMatrix(arr))
// T.C => O (N * M) Even we run four loops atleast we are looping all the values 
// S.C => O (N * M)
