// Merge Sort  => Divide untill it become single element and then Merge
// In case of two pointer, mid value be low+high /2 and single element will be low== high
let arr1 = [16, 3, 78, 52, 65];
let arr2 = [13, 56, 1, 8];
const mergeSort = (arr, low, high) => {
  if (low === high) return;
  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const merge = (arr, low, mid, high) => {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  for (let index = low; index <= high; index++) {
    arr[index] = temp[index - low];
  }
};

mergeSort(arr1, 0, arr1.length - 1);
console.log(arr1);
// For Divide, we are dividing the arr by 2 so it will be O(log2 N)
// For Merge it will be O(N)
// T.C => O (log N * N) for best, average, worst
// S.C => O (N) for storing the temp array