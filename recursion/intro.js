// Each recursion function should have three operation
// - Its own responsibility
// - Call the function itself
// - Base condition to stop the function call

const printNumbers = (num, totalTimes) => {
  if (num > totalTimes) return;
  console.log(num);
  num++;
  printNumbers(num, totalTimes);
};

// printNumbers(1, 5);

const printNumbersReverse = (i, n) => {
  if (n < i) return;
  console.log(n);
  printNumbersReverse(i, n - 1);
};

printNumbersReverse(1, 5);

// T.C => O (N) , N => Number of times the function is called
// S.C => O (N) , N => Number of functions stored on system memory not in array or any other variable

const printName = (name, NoofTimes, totalTimes) => {
  if (NoofTimes > totalTimes) return;
  console.log(name);
  NoofTimes++;
  printName(name, NoofTimes, totalTimes);
};

// printName("Anbarasan", 1, 3);

// T.C => O (N) , N => Number of times the function is called
// S.C => O (N) , N => Number of functions stored on system memory not in array or any other variable
