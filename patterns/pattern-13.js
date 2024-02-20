const pattern = (rows) => {
  let string = "";
  let value = 1;
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= row; col++) {
      string += value + " ";
      value += 1;
    }
    string += "\n";
  }
  return string;
};

console.log(pattern(5));
