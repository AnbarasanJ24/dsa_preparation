let arr1 = [10, 5, 10, 15, 10, 5];
// output => 10, 15
// 10 => Highest Frequency (3 times)
// 15 => Lowest Frequency (1 time)

let arr2 = [2, 2, 3, 4, 4, 2];
// output => 2 3

const computeFrequency = (arr) => {
  // Pre-compute 10=>3, 5=>2, 15=> 1
  let map = new Map();
  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let highestFrequency = 0;
  let highestNum = 0;
  let lowestNum = 0;
  let lowestFrequency = arr.length;
  for (let [num, frequency] of map.entries()) {
    if (frequency > highestFrequency) {
      highestNum = num;
      highestFrequency = frequency;
    }
    if (frequency < lowestFrequency) {
      lowestNum = num;
      lowestFrequency = frequency;
    }
  }
  console.log(map.entries());
  console.log(highestNum, lowestNum);
};

computeFrequency(arr2);

// T.c => O(N) + O(Number of items on the map)
// S.C => O(N)
