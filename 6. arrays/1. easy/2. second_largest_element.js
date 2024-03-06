let arr1 = [13, 56, 41, 39, 56, 8];

// Brute Force
// Sort the array, so that largest element will be at the last
// Here taking n-2 will not be a second largest in case of two same largest number [8,13,39,41,56,56]
// Run a loop from n-2 to 0 to find number not equal to largest
// If there is no second largest return -1 i.e [1,1,1] (assuming all values in array is positive)
//  In case of negative number, take Number.MIN_VALUE;

arr1.sort((a, b) => a - b);

let length = arr1.length - 1;
let largest = arr1[length - 1];
let sLargest = -1;

for (let index1 = length - 2; index1 >= 0; index1--) {
  if (arr1[index1] !== largest) {
    sLargest = arr1[index1];
    break;
  }
}
// Here first element other than largest is second largest, second element other than largest is third largest

// console.log("Brute - second largest", secondLargest);
// T.C => O (N Log N) for sorting + O (N) for loop => O (N Log N)
// S.c => O (1)

// Better
// First find the largest element in single iteration
// Keep the second largest as -1 and check the number greater than that and also not equal to largest

let largest1 = arr1[0];
for (let index = 1; index < arr1.length; index++) {
  if (arr1[index] > largest1) {
    largest1 = arr1[index];
  }
}
let slargest = Number.MIN_SAFE_INTEGER;
for (let index = 0; index < arr1.length; index++) {
  if (arr1[index] > slargest && arr1[index] !== largest1) {
    slargest = arr1[index];
  }
}
console.log("Better - second largest", slargest);
// T.C => O (N + N) for two iteration => O (2N)
// S.c => O (1)

// Optimal
let arr2 = [5, 7, 7, 4, 1, 2];

const secondLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > largest) {
      secondLargest = largest;
      largest = arr[index];
    } else if (arr[index] !=  largest && arr[index] > secondLargest) {
      secondLargest = arr[index];
    }
  }
  return secondLargest;
};
console.log("Optimal - second largest", secondLargest(arr2));

const secondSmallest = (arr) => {
  let smallest = arr[0];
  let secondSmallest = Number.MAX_SAFE_INTEGER;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < smallest) {
      secondSmallest = smallest;
      smallest = arr[index];
    } else if (arr[index] != smallest && arr[index] < secondSmallest) {
      secondSmallest = arr[index];
    }
  }
  return secondSmallest;
};
console.log("Optimal - second smallest", secondSmallest(arr2));

// T.C => O (N) [Single iteration] 
// S.c => O (1)
