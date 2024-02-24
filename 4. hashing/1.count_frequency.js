// Hashing is all about pre-computing and fetching

// Count the frequency
let arr = [1, 2, 3, 1, 3];
let numbersToCheck = [1, 2, 56, 7, 3];
let hash = Array(12).fill(0);

// Pre-computing
for (let num of arr) {
  hash[num] += 1;
}

for (let num of numbersToCheck) {
  // Fetching
  console.log("Number", num, "frequency", hash[num]);
}

// In above approach we cant determine the hash array size
// Int array inside main (C++) can allocate memory till 10^6 and globally 10^7[1e7]
