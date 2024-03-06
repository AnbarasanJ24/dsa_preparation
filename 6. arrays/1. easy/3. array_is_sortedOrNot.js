let arr1 = [1, 5, 10, 20, 30];
let arr2 = [1, 5, 69, 10, 20];

// There is no brute, better apparoach
// Start from 1st element and make sure its previous element lesser or equal
// Since above condition will have empty if condition, reverse it 

const isSorted = (arr) => {
  for (let index = 1; index < arr.length; index++) {
    if (arr[index] < arr[index - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isSorted(arr2))

// Optimal
// T.C => O (N)
// S.c => O (1)
