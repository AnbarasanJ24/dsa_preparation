/**
Given a matrix, your task is to rotate the matrix 90 degrees clockwise.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output : [[7,4,1],[8,5,2],[9,6,3]]
Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix.

Example 2:

Input:[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
Explanation: Rotate the matrix simply by 90 degree clockwise and return the matrix

*/

// Brute
// For 90 deg, we need to place first row to last col, second row to last before col and so on
// For maping row to col, the new position row is equal to exitsing postion col and new position col is (N-1)-i
// [0,0] => [0,3]
// [0,1] => [1,3]
// [0,2] => [2,3]
// [0,3] => [3,3]
// Create a new array, Loop the existing array and place it based on the new position

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 13],
  [13, 14, 15,16],
];

const rotateMatrixBrute = (arr) => {
  let N = arr.length;
  let result = new Array(arr.length)
    .fill(null)
    .map(() => new Array(arr.length).fill(0));

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      result[col][N - 1 - row] = arr[row][col];
    }
  }
  return result;
};

console.log(rotateMatrixBrute(arr));

// T.C => O (N ^2)
// S.C => O (N ^2)

// Optimal
// We need to optimize the extra space used in Brute, means in place
// Here first col reverse values === result array first row, second col reverse value === second row [Col ==> Row]
// Transpose the matrix [row becomes the col and col becomes the col] then reverse the each row

// Transpose the matrix
// The diagonal value will be remian same, swap only the remaining value
const arr1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const swap = (arr, row, col) => {
  let temp = arr[row][col];
  arr[row][col] = arr[col][row];
  arr[col][row] = temp;
};
const transpose = (arr) => {
  for (let row = 0; row < arr.length - 1; row++) {
    for (let col = row + 1; col < arr.length; col++) {
      swap(arr, row, col);
    }
  }
  return arr;
};
const rotateMatrixOptimal = (arr) => {
  const transposedMatrix = transpose(arr);
  for (let i = 0; i < transposedMatrix .length; i++) {
    let start = 0;
    let end = transposedMatrix [i].length - 1;
    while (start < end) {
      let temp = transposedMatrix [i][start];
      transposedMatrix [i][start] = transposedMatrix [i][end];
      transposedMatrix [i][end] = temp;
      start++;
      end--;
    }
  }
  return transposedMatrix
};

console.log(rotateMatrixOptimal(arr1));
// T.C => O (N^2) 
// S.C => O (1)
