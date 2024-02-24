//https://takeuforward.org/pattern/pattern-1-rectangular-star-pattern/

// 4 Rules
// 1. Mostly two lopps will be used, Check the rows for outer loop
// 2. check the column for inner loop and try to connect the column with row (There should be some connection)
// 3. Always print the pattern inside inner loop
// 4. Check for symmetry (Few Problems)

const pattern1 = (rows, columns) => {
  let string = "";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      string += "* ";
    }
    string += "\n";
  }
  return string;
};
console.log(pattern1(5, 5));

// T.c => O(N^2)
// S.C => O(N^2)
