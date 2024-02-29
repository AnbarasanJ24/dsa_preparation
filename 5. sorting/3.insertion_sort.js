// Take a element and insert it at right spot [sorted order]
// Make sure the left side of selected element is sorted
let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 1, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const insertionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let j = i;

    while (j > 0 && arr[j - 1] > arr[j]) {
      swap(arr, j, j - 1);
      j--;
    }
  }
};

insertionSort(arr2);
console.log(arr2);

// In case of arr [5,4,3,2,1] , while loops runs as 0 + 1 + 2 + 3... so on which is N(N+1)/2
// T.C => O (N^2) for worst and average, O(N) for best (in case of sorted arr array where while loop will not be executed)
// S.C => O (1)