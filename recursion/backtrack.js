// Print 1 to N
// Instead of starting from 1, start with N and backtrack it
// In case of Backtracking, the function itself will be called after the function responsibility

const printNumbers = (i) => {
  if (i < 1) return;
  printNumbers(i - 1);
  console.log(i);
};

printNumbers(4);

const printNumbers_1 = (i, n) => {
  if (i > n) return;
  printNumbers_1(i + 1, n);
  console.log(i);
};

printNumbers_1(1, 4);

// T.C => O (Number of functions on the Stack)
// S.C => O (Number of functions on the Stack)