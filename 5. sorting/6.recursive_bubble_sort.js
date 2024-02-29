let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 41, 39, 32, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const bubbleSort = (arr, n) => {
  if (n == 1) return;
  let isSwapped = false;
  for (let i = 0; i <= n - 2; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
      isSwapped = true;
    }
  }
  if (!isSwapped) return;
  bubbleSort(arr, n - 1);
};

bubbleSort(arr2, arr2.length);
console.log(arr2);

// T.C => O (N^2), For each N we run N-1 times, (N-1 + N-2+N-3) which will be summation of natural numbers (N * (N-1)/2)
// S.C => O (N- Number of function in stack not extra memory)

// We can optimize this solutions for best case to T.C => O (N)
