// Bubble sort
// Push the max to the last by adajacent steps
// After checking the max for each row, after complete traversal the max will be at the last

let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 41, 39, 32, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};                                            

const bubbleSort = (arr) => {
  // 0,1,2,3,4,5
  for (let index1 = 0; index1 < arr.length; index1++) {
    let isSwapped = false;
    for (let index2 = 0; index2 < arr.length - index1 - 1; index2++) {
      if (arr[index2] > arr[index2 + 1]) {
        swap(arr, index2, index2 + 1);
        isSwapped = true;
      }
    }
    if(!isSwapped) break;
  }
};

// T.C => O(N) + O(N-i-1) => O (N^2) => Worst & Best case, O(N) for best case [Explanation below]
// S.C => O(1)

bubbleSort(arr2);
console.log(arr2);

// In case of sorted array arr =[1,2,3,4,5]
// No swap is required so it runs O (N) times [Keep a variable to check the swapt happened or not]
