// Each recursion function should have three operation
// - Its own responsibility
// - Call the function itself
// - Base condition to stop the function call

const printNumbers = (start, end) => {
  if (start > end) return;
  console.log(start);
  printNumbers(start + 1, end);
};

printNumbers(1, 5);

const printNumbersReverse = (start, end) => {
  if (start < end) return;
  console.log(start);
  printNumbersReverse(start - 1, end);
};

printNumbersReverse(5, 1);

// T.C => O (N) , N => Number of times the function is called
// S.C => O (N) , N => Number of functions stored on system memory not in array or any other variable

const printName = (name, start, end) => {
  if (start > end) return;
  console.log(name);
  start++;
  printName(name, start, end);
};

// printName("Anbarasan", 1, 3);

// T.C => O (N) , N => Number of times the function is called
// S.C => O (N) , N => Number of functions stored on system memory not in array or any other variable
