// Find the number appear once and the other numbers twice
// i.e Find a number without a pair in the pairs of array
let arr = [1, 1, 2, 3, 3, 4, 4];
// Output => 2

// Brute
// Take a element on outer loop and check its count on inner loop
// if the count is 1 then it doesn't have a pair

const numberWithoutPair = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count == 1) return arr[i];
  }
};
console.log(numberWithoutPair(arr));
// T.C => O (N^2)
// S.C => O (1)

// Better
// Store the frequency of the number in map
// frequency with 1 will be the number without pair

const numberWithoutPairBetter = (arr) => {
  let frequencyMap = new Map();
  // O (N) for unordered and O(N Log M) for ordered (M-size of the map)
  for (let i = 0; i < arr.length; i++) {
    if (frequencyMap.has(arr[i])) {
      frequencyMap.set(arr[i], frequencyMap.get(arr[i] + 1));
    } else {
      frequencyMap.set(arr[i], 1);
    }
  }
  // O (N/2) +1 [saving a single number from pair + element without pair]
  for (let [key, value] of frequencyMap.entries()) {
    if (value === 1) return key;
  }
};
console.log(numberWithoutPairBetter(arr));
// T.C => O (N) + O(N/2)
// S.C => O (N/2)+1

// Optimal
// Same like finding missing number, we can use xor to mark pair value as zero
// So the pair without xor of zero will give the same number
const numberWithoutPairOptimal = (arr) => {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
};
console.log(numberWithoutPairOptimal(arr));
// T.C => O(N)
// S.C => O(1)
