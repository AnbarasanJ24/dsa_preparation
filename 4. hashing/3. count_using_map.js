// For Map, also decide the key and value before pre-compute
// Key => Number
// Value => Frequency
// By changing key => Character will work for character frequency

// Count the frequency for numbers
let arr = [5,1, 2, 3, 1, 3];
let numbersToCheck = [1, 2, 56, 7, 3];
let map = new Map();

// Pre-computing
for (let num of arr) {
  let key = num;

  if (map.has(key)) {
    let value = map.get(key);
    map.set(key, value + 1);
  } else {
    map.set(key, 1);
  }
}
console.log(map.keys())

for (let num of numbersToCheck) {
  // Fetching
  console.log("Number", num, "frequency", map.get(num) || 0);
}

// T.C => For Pre-compute O (N => Number of elements in the array)
// For stroring & fetching, for ordered map it will be O (log N) for best, average and worst case
// For unordered map, it will O(1) for best & average and O(N) for worst case (when there is collision )
// If the code is failing with unordered map then try ordered map
// collision - if more values comes under the same hash key then collision will happen
