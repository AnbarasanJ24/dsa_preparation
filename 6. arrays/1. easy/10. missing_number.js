// Find the missing number in the array
let arr1 = [1, 2, 4, 5];
let N = 5;
// output => From 1 to N i.e 5, 3 is missing

// Brute
// Loop from 1 to N and check each number present in the array or not => O (N^2)
// If present then mark in a variable as found = true
// After one iteration if the found varibale is false then that is missing number

const missingNumber = (arr, N) => {
  for (let i = 1; i <= N; i++) {
    let found = false;
    for (let j = 0; j < N - 1; j++) {
      if (arr[j] === i) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }
};

console.log(missingNumber(arr1, N));

// T.C => O (N^2)
// S.C => O (1)

// Better - Hashing with array
// Create a found array for N+1 size to accomadate 1 to N elements and mark initial as false
// Loop the given array and mark it is found or not
// Then loop the found array and return the number which is not found

const missingNumberHashing = (arr, N) => {
  let found = new Array(N + 1).fill(false);
  let missingElement = -1;
  for (let i = 0; i < arr.length; i++) {
    // O(N-1)
    found[arr[i]] = true;
  }
  for (let i = 1; i < found.length; i++) {
    // O(N+1)
    if (!found[i]) {
      missingElement = i;
      break;
    }
  }
  return missingElement;
};
console.log(missingNumberHashing(arr1, N));
// T.C => O(2N)
// S.C => O(N) for hashing

// Optimal
// Sum and XOR

// Sum
// Find the totla sum using N(N+1)/2
// Loop the given array and find its sum
// Total sum and array sum difference will be the missing number

const missingNumberSum = (arr, N) => {
  let totalSum = Math.floor((N * (N + 1)) / 2);
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  let sum2 = arr.reduce((sum, curr) => sum + curr, 0);
  return totalSum - sum2;
};

console.log(missingNumberSum(arr1, N));
// T.C => O(N)
// S.C => O(1)

// XOR
// when two number are same then XOR will be zero => 2^2 = 0
// 2^2^2^2 will become 0^0 => 0
// 2^2^2^2^2 => 0^0^2 => 0^2 => zero wth any non zero number XOR is that num itself => 2

const missingNumberXOR = (arr, N)=>{
    let xor1 = 0;
    let xor2 = 0;

    for(let i =0 ; i < N-1; i++){
        xor1 = xor1 ^ arr[i]
        xor2 = xor2 ^ (i+1)
    }
    xor2 = xor2 ^ N

    return xor1 ^ xor2;
}
console.log(missingNumberXOR(arr1, 5))