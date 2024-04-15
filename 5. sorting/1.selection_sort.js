// Selection sort
// Pick a element and assume that is a min. now loop the rest of the array and find the value min than that
// After on complete iteration swap it 


let arr1 = [3, 6, 1, 9, 2, 8];
let arr2 = [13, 56, 41, 39, 32, 8];

const swap = (arr, index1, index2) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const selectionSort = (arr) => {
  for (let index1 = 0; index1 < arr.length - 1; index1++) {
    let minIndex = index1;
    for (let index2 = index1 + 1; index2 < arr.length; index2++) {
      if (arr[index2] < arr[minIndex]) {
        minIndex = index2;
      }
    }
    swap(arr, index1, minIndex);
  }
};

selectionSort(arr2);
console.log(arr2);
// T.C => O ((N-1)*N) => O(N^2) 
// S.C => O (1)


