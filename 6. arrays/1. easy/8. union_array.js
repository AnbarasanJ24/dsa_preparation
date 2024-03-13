// Find the union of two sorted arrays
// The result should have values from both array without any duplicates
// let arr1 = [1, 2, 3, 3, 9,9];
// let arr2 = [1, 2, 4, 6];
// let result = [1, 2, 3, 4, 6, 9];


// Brute Force
// Loop the array and push it to set to get unique elements
// Convert the set into array and apply sort function

const unionArray = (arr1, arr2) => {
  let union = new Set();
  //   O(N1 log N)
  for (let num of arr1) {
    union.add(num);
  }
  //   O(N2 log N)
  for (let num of arr2) {
    union.add(num);
  }
  // O (N1+N2) [If all elements are unqiue in both array] + O(N log N)
  return [...union].sort((a, b) => a - b);
};
// console.log(unionArray(arr1, arr2));
// T.C => O (N1 logN) + O(N2 log N) + O(N1+N2) + O(N logN)
// S.c => O (N1 + N2) = store the unique values

let arr1 = [1, 2, 3, 3, 9,9];
let arr2 = [1, 2, 4, 6];
let result = [1, 2, 3, 4, 6, 9];

const unionArrayOptimal = (arr1, arr2) => {
  let result = [];
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
    } else {
      if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
        result.push(arr2[j]);
      }
      j++;
    }
  }
  while (i < n1) {
    if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
      result.push(arr1[i]);
    }
    i++;
  }
  while (j < n2) {
    if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
      result.push(arr2[j]);
    }
    j++;
  }
  return result;
};

// T.C => O (N1) + O (N2) => O(N1+N2), looping the two complete array 
// S.C => O (N1 + N2) 

console.log(unionArrayOptimal(arr1, arr2));
