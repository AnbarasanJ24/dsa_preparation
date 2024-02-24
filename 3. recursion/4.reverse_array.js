let arr = [1, 2, 3, 4, 5];

// Two pointer

const reverse = (arr, index1, index2) => {
  if (index1 === index2) return;
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  reverse(arr, index1 + 1, index2 - 1);
};
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// Since we are increasing and decreasing the index by 1
// We can swap first and last uisng swap(i, n-1-i)
// For every i index, the last digit will be n-1-i

const reverse_1 = (arr, index1) => {
  if (index1 >= Math.floor(arr.length / 2)) return;
  let temp = arr[index1];
  arr[index1] = arr[arr.length - 1 - index1];
  arr[arr.length - 1 - index1] = temp;
  reverse_1(arr, index1 + 1);
};
reverse_1(arr, 0);
console.log(arr);