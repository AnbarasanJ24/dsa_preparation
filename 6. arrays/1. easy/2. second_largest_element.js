let arr1 = [13, 56, 41, 39, 56, 8];

// Brute Force
// Sort the array, so that largest element will be at the last
// Here taking n-2 will not be a second largest in case of two same largest number [8,13,39,41,56,56]
// Run a loop from n-2 to 0 to find number not equal to largest
// If there is no second largest return -1 i.e [1,1,1] (assuming all values in array is positive)
//  In case of negative number, take Number.MIN_VALUE;

arr1.sort((a, b )=> a - b);

let length = arr1.length - 1;
let largest = arr1[length - 1];
let secondLargest = -1;

for (let index1 = length - 2; index1 >= 0; index1--) {
  if (arr1[index1] !== largest) {
    secondLargest = arr1[index1];
    break;
  }
}
// Here first element other than largest is second largest, second element other than largest is third largest

console.log(secondLargest)
// T.C => O (N Log N) for sorting + O (N) for loop => O (N Log N)
// S.c => O (1)
