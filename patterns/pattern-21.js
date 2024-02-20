const pattern1 = (rows) => {
  let string = "";
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= rows; col++) {
      if (row === 1 || row === rows || col === 1 || col === rows) {
        string += "*";
      } else {
        string += " ";
      }
    }

    string += "\n";
  }
  return string;
};

console.log(pattern1(7));
