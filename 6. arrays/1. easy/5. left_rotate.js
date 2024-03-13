let arr = [1, 2, 3, 4, 5];
// Output = [2,3,4,5,1]
// Take one element and keep it the right
// Then move all the element one step ahead

// Store that first element in temp [Which will be shifted to the right]
// Move the value from 1st index to 0th index, 2nd index to 1st index and so on
// At last keep the temp value as the last element

const leftRotate = (arr, k) => {
  let temp = arr[0];

  for (let index = 1; index < arr.length; index++) {
    arr[index - 1] = arr[index];
  }

  arr[arr.length - 1] = temp;
};
leftRotate(arr, 3);
console.log(arr);


// T.C => O (N) 
// S.c => O (1)