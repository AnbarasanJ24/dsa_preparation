const alphabets = ["A", "B", "C", "D", "E","F"]
const pattern = (rows) => {
  let string = "";
  let value = 1;
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= row; col++) {
      string += alphabets[row-1] + " "
    }
    string += "\n";
  }
  return string;
};

console.log(pattern(5));
