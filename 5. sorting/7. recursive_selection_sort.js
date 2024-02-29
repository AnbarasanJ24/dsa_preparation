let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 41, 39, 32, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const selectionSort = (arr, low, high) => {
  if (low === high) return;
  let min = low;
  for (let i = low; i <= high; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  swap(arr, low, min);
  selectionSort(arr, low + 1, high);
};

selectionSort(arr2, 0, arr2.length - 1);
console.log(arr2);

// T.C => O (N^2)
// S.C => O (N - Number of functions on the auxillary space)