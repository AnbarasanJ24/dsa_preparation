// Check which numbers can divide the given number so that it the remainder will be zero
// 36 => 1,2,3,4,6,9,12,18,36
// 6 => 1,2,3,6

const printAllDivisors = (N) => {
  let result = "";

  for (let eachNumber = 1; eachNumber <= N; eachNumber++) {
    if (N % eachNumber === 0) {
      result += eachNumber + ",";
    }
  }
  return result;
};

console.log(printAllDivisors(36));

// T.C => O(N)

const printAllDivisors_1 = (N) => {
  let result = "";
//   for (let eachNumber = 1; eachNumber <= Math.sqrt(N); eachNumber++) {
  for (let eachNumber = 1; eachNumber *eachNumber  <= N; eachNumber++) {
      if (N % eachNumber === 0) {
          result += eachNumber + ",";
      if (eachNumber !== Math.floor(N / eachNumber)) {
        result += Math.floor(N / eachNumber) + ",";
      }
    }
  }
  return result;
};

console.log(printAllDivisors_1(36));

// T.C => )
