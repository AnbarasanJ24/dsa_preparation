/**
Given a matrix if an element in the matrix is 0 then you will have to set its entire column and row to 0 and then return the matrix.

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Explanation: Since matrix[2][2]=0.Therfore the 2nd column and 2nd row wil be set to 0.

Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
Explanation: Since matrix[0][0]=0 and matrix[0][3]=0. Therefore 1st row, 1st column and 4th column will be set to 0

*/

// Brute
// Do a two loops, check the element is zero or not
// If the element is zero, then mark its entire row & cols value other than zero with different identifier (-1)
// Make sure the exitsing zero will not be marked, because they will contribute to different row and cols
// Loop the array one more time ans mark the identifier as 0

const arr = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

const setMatrixZeroBrute = (arr) => {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        for (let i = 0; i < arr[row].length; i++) {
          if (arr[row][i] != 0 && arr[row][i] != -1) {
            arr[row][i] = -1;
          }
        }
        for (let i = 0; i < arr[row].length; i++) {
          if (arr[i][col] != 0 && arr[i][col] != -1) {
            arr[i][col] = -1;
          }
        }
      }
    }
  }
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === -1) {
        arr[row][col] = 0;
      }
    }
  }
  return arr;
};

console.log(setMatrixZeroBrute(arr));
// T.C => O (N*M) * O(N+M) + O(N*M) => Nearly to O(N^3)
// S.C => O (1)

// Better
// On above approach, after finding zero and making entire row and col as zero again
// Create a seperate row and col array and mark its index whenever there is a zero
// After that loop the entire array again and check its row or col index is marked as zero in seperate array
// If so mark its value as 0

const arr1 = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

const setMatrixZeroBetter = (arr) => {
  let rowMarker = new Array(arr.length).fill(-1);
  let colMarker = new Array(arr.length).fill(-1);
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        rowMarker[row] = 0;
        colMarker[col] = 0;
      }
    }
  }
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (rowMarker[row] === 0 || colMarker[col] === 0) {
        arr[row][col] = 0;
      }
    }
  }
  return arr;
};

console.log(setMatrixZeroBetter([...arr1]));
// T.C => O (2 * N  * M) - Looping two times
// S.C => O (N) + O(M) for storing row and col values

// Optimal
// Instead of creating row & col seperately, lets consider first row to mark col and first col to mark row
// Since both has same starting point, let extend col0=1 seperately
// Start traverse the arra from (1,1) and mark its corresponding row & col as 0 when the element is zero

const arr2 = [
  [1, 1, 1, 1],
  [1, 0, 0, 1],
  [1, 1, 0, 1],
  [1, 1, 1, 1],
];

const setMatrixZeroOptimal = (arr) => {
  let col0 = 1;
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === 0) {
        arr[row][0] = 0;
        if (col != 0) {
          arr[0][col] = 0;
        } else {
          col0 = 0;
        }
      }
    }
  }
  for (let row = 1; row < arr.length; row++) {
    for (let col = 1; col < arr[row].length; col++) {
      if (arr[row][col] != 0) {
        if (arr[0][col] === 0 || arr[row][0] ===0 ) {
          arr[row][col] = 0;
        }
      }
    }
  }
  //   If the first element is zero then the entire row will be zero
  if (arr[0][0] === 0) {
    for (let i = 0; i < arr[0].length; i++) {
      arr[0][i] = 0;
    }
  }
//   If the first column is zero then makr the entire col as zero
  if (col0 === 0) {
    for (let i = 0; i < arr[0].length; i++) {
      arr[i][0] = 0;
    }
  }
  return arr;
};
console.log(setMatrixZeroOptimal([...arr2]));

// T.C => O (2 * N * M)
// S.C => O (1)