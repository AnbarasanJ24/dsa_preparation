const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pattern = (rows) => {
  let string = "";
  for (let row = 1; row <= rows; row++) {
    // star
    let start = rows - row - 1;
    // 5 - 3 = 2 // C
    for (let col = 1; col <= row; col++) {
      string += alphabets[start+col] + " ";
    }

    string += "\n";
  }
  return string;
};
console.log(pattern(5));
