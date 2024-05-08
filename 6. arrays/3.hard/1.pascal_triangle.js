/**
Example 1: Input Format:

N = 5, r = 5, c = 3

Result: 
6 (for variation 1)
1 4 6 4 1 (for variation 2)
1 
1 1 
1 2 1 
1 3 3 1 
1 4 6 4 1    (for variation 3)

Explanation: There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

Example 2:
Input Format: N = 1, r = 1, c = 1

Result:
1 (for variation 1)
1 (for variation 2)
1  (for variation 3)

Explanation: The output matrix has only 1 row.
 */

// Variation-1
// For the given row & col, find the value in the Pascal Triangle

// Brute
// Generate the complete pascal triangle - Variation 3
// Get the respective row and col

// T.C => O (N^2)
// S.C => O (1)

// Better
// We have a formula (R-1)^C^(C-1) will give the value at row, col
// We need to calculate n^c^r = n!/r! *(r-n)!
// Here n! & r! & (r-n)! values needed to calculated

// T.C => O (N) + O(R) + (N-R) - Finding the factorial
// S.C => O (1)

// Optimal
// For n^c^r for 10c3 => (10*9*8)/ (3*2*1)=> 6
// Using this formula, we can calculate the value quickly
let row = 5;
let col = 3;

const nCr = (row, col) => {
  row -= 1;
  col -= 1;
  let result = 1;
  for (let i = 0; i < col; i++) {
    result = result * (row - i);
    result = result / (i + 1);
  }
  return Math.floor(result);
};

console.log(nCr(row, col));

// Variation-2
// For the given row, print all the elements in the row

// Brute
// We can calculate the nCr for any row & col using variation-1
// Find the same for all elements in the given row
// For 6th row it would be 6C1, 6C2, 6C3, 6C4, 6C5, 6C6

const printPascalRow = (N) => {
  let result = [];
  for (let i = 1; i <= N; i++) {
    result.push(nCr(N, i));
  }
  return result;
};

console.log(printPascalRow(6));
// T.C => O (N * R) - For every element we call nCr function
// S.C => O (N) - to store the results

// Optimal
// Refer the striver article for reference
// We know the frist & last value will be 1
// Starting from 1st col, we have a common element

const printPascalRowOptimal = (N) => {
  let ans = 1;
  let result = [1];
  for (let i = 1; i < N; i++) {
    ans = ans * (N - i);
    ans = ans / i;
    result.push(ans);
  }
  return result;
};
console.log(printPascalRowOptimal(6));
// T.C => O (N)
// S.C => O (N) - to store the results

// Variation - 3
// For given N, print the entire pascal triangle

let N = 6;
const printPascalTriangle = (N) => {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let tempResult = [];
    for (j = 1; j <= i; j++) {
      tempResult.push(nCr(i, j));
    }
    result.push(tempResult);
  }
  return result;
};
console.log(printPascalTriangle(N));

// T.C => O (N^2) * O(R) - For every element we call nCr function
// S.C => O (N^2) - To store the result

const printPascalTriangleOptimal = (N) => {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let tempResult = [];
    tempResult.push(...printPascalRowOptimal(i));
    result.push(tempResult);
  }
  return result;
};

console.log(printPascalTriangleOptimal(N));
// T.C => O (N ^2) - For every element call generateRow function
// S.C => O (N ^2) - To store the result not for solving
