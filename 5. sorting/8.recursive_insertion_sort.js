let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const insertionSort = (arr, low, high) => {
  if (low === high) return;
  let j = low;
  while (j > 0 && arr[j - 1] > arr[j]) {
    swap(arr, j, j - 1);
    j--;
  }
  insertionSort(arr, low + 1, high);
};

insertionSort(arr2, 1, arr2.length);
console.log(arr2)
