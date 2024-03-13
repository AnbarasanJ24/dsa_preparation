// Find the longest subarray with k sum
// let arr = [1, 2, 3];
let arr = [1, 2, 3, 1, 1, 1, 1, 4, 2, 3];
let k = 3;
// subarray - contigous or continous part of array
// [1,2] & [3] &[1,1,1] all gives sum to k but longest is [1,1,1] and length is 3
// output => 3

// Brute
// Generate all subarray and check which subarrays sum is equal to k
// Check its length and update if its a maximum

const longestSubarray = (arr, k) => {
  let max = 0;
  //Define start
  for (let i = 0; i < arr.length; i++) {
    // Define end
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      // Run start to end
      //   let sum=0;
      //   for (let k = i; k <= j; k++) {
      //     sum += arr[k];
      //   }
      sum += arr[j];
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};

console.log(longestSubarray(arr, k));

// T.C => O (N^2)
// S.C => O (1)

// Better - Using Prefix sum
// Prefix sum gives the total sum till that point, and I'm looking the sum ==k
// Example, total sum is 10 and looking for 3, so If 10-3=7 is avaiable then subarray of sum 3 will be avaiable
// We need to check prefix sum of 7 is available or not in hashing
// Post that make sure the found subarray length is max

// In case of negative or Zeroin in given array there is a possibility prefix sum will be reduced or with same value
// Updatng the prefix sum with different index will give incorrect results
// In case of negative or zero in given array, check the sum not exists in the map if so insert it else ignore it [more details on code]
// The below solution is optimal for negative or zero numbers in the array

const longestSubarrayBetter = (arr, k) => {
  let max = 0;
  let map = new Map(); //Key - Prefix sum, Value is index
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === k) {
      max = Math.max(i + 1, max);
    }
    if (map.has(sum - k)) {
      let sumIndex = map.get(sum - k);
      max = Math.max(max, i - sumIndex);
    }
    // For Postive Numbers
    // map.set(sum, i);

    // For Negative or zero Numbers
    else if (!map.has(sum)) {
      map.set(sum, i);
    }
  }
  return max;
};

// T.C => O(N log N) for ordered map and O(N) for unordered map [in case of more collision it will be O (N^2)]
// S.C => O(N) (If every index will have prefix sum )

// Optimal for array have only postive and zero numbers
// Keep two pointers, we have to find when the sum is equal to k by moving the pointer
// If the sum exceeds k then move the left pointer and reduce the sum
// If the sum is lower than k sum the right pointer to increase the sum
// Once the sum is equal to k then calculate the length

const longestSubarrayOptimal = (arr) => {
  let left = 0;
  let right = 0;
  let max = 0;
  let sum = arr[0];
  let n = arr.length;

  // Right goes from 0 to N => O(N)
  while (right < n) {
    // Once the sum is lesser than only we should add as next step
    // This loop will not run for every N, this will run only when sum exceeds k => O(N)
    while (left <= right && sum > k) {
      sum -= arr[left];
      left++;
    }
    if (sum === k) {
      max = Math.max(max, right - left + 1);
    }
    right++;
    if (right < n) {
      sum += arr[right];
    }
  }
  return max;
};
console.log(longestSubarrayOptimal(arr));

// T.C => O(2N)
// S.C => O(1)
