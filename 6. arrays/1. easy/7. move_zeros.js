// For the given array move all zeros to the end
// The number order should be maintained

let arr1 = [13, 56, 0, 41, 0, 39, 0, 32, 0, 0, 8];

// Brute Force
// Loop the arr and push non zero value to temp array => O(N)
// Loop the arr again and push the value from temp array if exists else put zero => O(N)

const removeZeros = (nums) => {
  let temp = [];
  for (let num of nums) {
    if (num != 0) {
      temp.push(num);
    }
  }
  console.log(temp);
  for (let index = 0; index < nums.length; index++) {
    nums[index] = temp[index] != undefined ? temp[index] : 0;
  }
};

// removeZeros(arr1);
// console.log(arr1);

// T.C => O (2N)
// S.c => O (N) Assuming all values is non zero and moved to temp

// Optimal
// We should use one pointer to maintain zero another pointer to find the non zero
//  As soon as we find non zero swap with Zero pointer index
// Increase the zero pointer because the next value will be zero in case of swapping or skipping

// Step 1: Find the zero and make as j
// Step 2: Start looping j+1 and find the non zero and swap with zero

const removeZerosOptimal = (nums) => {
  
    let zeroPointer = -1;
    // Finding the First zero => O(x) - x is Number of steps to find zero
    for (let index = 0; index < nums.length; index++) {
        if (nums[index] === 0) {
            zeroPointer = index;
            break;
        }
    }
    // If there is no zero then return the array without any modification
    if (zeroPointer === -1) {
        return nums;
    }

    // O(N-x) Total steps minus number of steps to find zero
    for (let index = zeroPointer + 1; index < nums.length; index++) {
        if (nums[index] != 0) {
            let temp = nums[zeroPointer];
            nums[zeroPointer] = nums[index];
            nums[index] = temp;
            zeroPointer++;
        }
    }
};
removeZerosOptimal(arr1);
console.log(arr1);
// T.C => O (x) + O(N-x) => O (N)
// S.c => O (1)
