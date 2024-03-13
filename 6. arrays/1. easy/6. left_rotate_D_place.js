// For a given array, left rotate it by D times
let arr = [1, 2, 3, 4, 5];
let d = 3;
// O/P => [4,5,1,2,3]

// Brute
// splice the array from 0 to d => 1,2,3
// create new array and spread existing value [4,5] and splited value [1,2,3]

const left_rotate_brute = (arr, d) => {
  const sliced = arr.splice(0, d);
  return [...arr, ...sliced];
};

// T.C => O(N) For slicing
// S.C => O(N) for new array storing the result

// console.log(left_rotate_brute(arr, 2));

// Better
// Loop 0 to d-1 and store in temp array  => O (D)
// Loop d to N and shift the elements to the left O(N)
// Loop temp array and place it back to source array O(D)

let temp = [];
for(let index = 0; index < d; index++){
    temp.push(arr[index]);
}
console.log(temp)
for(let index = d ; index < arr.length; index++){
    arr[index- d] = arr[index];
}
for(let index= arr.length - d; index < arr.length ; index++){
    arr[index] = temp[(index+d)- arr.length]
}

// T.C => O(2D+N)
// S.c => O(D) for temp array

// Optimal
// Reverse 0 to d-1 => O(D)
// Reverse d to N => O(N-D)
// Reverse 0 to N => O(N)

const reverse = (arr, start, end) => {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const leftRotateDPlaces = (arr, d) => {
  reverse(arr, 0, d - 1);
  reverse(arr, d, arr.length - 1);
  reverse(arr,0, arr.length-1);
};
leftRotateDPlaces(arr,d % arr.length)
console.log("AFter Rotate", arr)

// T.C => O (2N)
// S.C => O (1)
