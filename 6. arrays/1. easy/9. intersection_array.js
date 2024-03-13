// Find the intersection of two sorted arrays
// The result should have common values between the array i.e should have a pair
let arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
let arr2 = [2, 3, 3, 5, 6, 6, 7];
// Here 2,5,6 is having one pair, 3 is having 2 pair
let result = [2, 3, 3, 5, 6];

// Brute
// Take one element in arr1 and check the pair value in arr2
// Since it is sorted, loop until arr2 value is lesser or smaller then arr1 values
// Check the arr1 element mataches with arr2
// If so check the same is not visted or used to make a pair then push to the result

const intersectionArray = (arr1, arr2) => {
  let visited = new Array(arr2.length).fill(false);
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let j = 0;
    while (arr2[j] <= arr1[i]) {
      if (arr2[j] === arr1[i] && !visited[j]) {
        visited[j] = true;
        result.push(arr1[i]);
        break;
      }
      j++;
    }
  }
  return result;
};
console.log(intersectionArray(arr1, arr2));

// T.C => O(N^2)
// S.C => O(N2) visited array for N2

// Optimal
// Keep two pointer, compare two elments from the two arrays
// If its match, then move both pointers
// If first element is lesser than second, then it can be pair so that alone
// Here the first element can be a match or lesser value

const intersectionArrayOptimal = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0;
  let j = 0;
  let result = [];
  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr1[i]) {
      j++;
    } else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  return result;
};

console.log(intersectionArrayOptimal(arr1, arr2));

// T.C => O (N1 + N2) For worst case if move the i and j one by one 
// S.C => O (N1 + N2) For worst case
