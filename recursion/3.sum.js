const sumNumbers = (i, sum) => {
  if (i <= 1) {
    console.log(sum);
    return;
  }
  sum = sum + i;
  sumNumbers(i - 1, sum);
};
// sumNumbers(4, 0);

const sumNumbers_1 = (i) => {
  if (i < 1) return 0;
  return i + sumNumbers_1(i - 1);
};

console.log(sumNumbers_1(4));

const factorial = (i) => {
  if (i < 1) return 1;
  return i * sumNumbers_1(i - 1);
};

console.log(factorial(4));

// T.C => O(number of functions on stack)
// S.C => O(number of functions on stack)