// Quick Sort => 1. Select a pivot and place it in a correct place as it in the sorted array
// 2. Smaller value on the left and higher value on the right
//  Since we will keep the selected pivot in the right place, we can pick the pivot from 1st element or last or mid or random
// It is used to sort the array in ascending order with little tweaks it can sort in descending order

let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 41, 39, 32, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

// Lets keep the smaller value on i side, so in case of any greater value stop because we need to stop
// Lets keep the highr value on j side, so in case of any smaller value stop because we need to stop
// After this swap i and j
// Do this untill i cross the j then i side will be smaller value and j side will be higher value
const getPivotIndex = (arr, low, high) => {
  let pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    // It will stop when greater value is found
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    // It will stop when smaller is found
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      // Swap smaller and greater value
      swap(arr, i, j);
    }
  }
  // J will have the last element of smaller element, so swap pivot and j
  swap(arr, low, j);
  return j;
};

const quickSort = (arr, low, high) => {
  // In case of first element as pivot, then low will be 0 and high will be -1
  // Keeping low < high will handle those cases
  if (low < high) {
    const pivotIndex = getPivotIndex(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  } else {
    console.log("Low & high", low, high);
  }
};

quickSort(arr1, 0, arr1.length - 1);
console.log(arr1);

// T.C => O (N Log N)
// Divide will take log N 
// N will be used to find the pivot 
// S.C => O (1) [Without taking the stack space]

// Write for Descending also