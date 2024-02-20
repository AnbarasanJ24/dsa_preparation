//  A number which excatly has two divisor or factors i.e 1 and the number itself
// If any number has factors more than that will not be a prime number

const primeCheck = (num) => {
  for (let eachNumber = 2; eachNumber < num; eachNumber++) {
    if (num % eachNumber === 0) {
      return false;
    }
  }
  return num !== 1 && true;
};
// T.C => O (N)

const primeCheck_1 = (num) => {
  for (let eachNumber = 2; eachNumber * eachNumber < num; eachNumber++) {
    if (num % eachNumber === 0) {
      return false;
    }
  }
  return num !== 1 && true;
};
// T.C => O(Sqrt(N))

const primeCheck_2 = (num) => {
  let count = 0;
  for (let eachNumber = 1; eachNumber <= num; eachNumber++) {
    if (num % eachNumber === 0) {
      count++;
    }
  }
  return count === 2;
};
const primeCheck_3 = (num) => {
  let count = 0;
  for (let eachNumber = 1; eachNumber * eachNumber <= num; eachNumber++) {
    if (num % eachNumber === 0) {
      count++;
      if (Math.ceil(num / 2) !== eachNumber) {
        count++;
      }
    }
  }
  return count === 2;
};

console.log(primeCheck_3(1));
