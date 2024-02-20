const pattern1 = (rows) => {
  let string = "";
  for (let row = 1; row <= 2 * rows - 1; row++) {
    if (row <= rows) {
      // stars
      for (let col = 1; col <= row; col++) {
        string += "*";
      }

      // spaces
      for (let col = 1; col <= rows * 2 - row * 2; col++) {
        string += " ";
      }

      // stars
      for (let col = 1; col <= row; col++) {
        string += "*";
      }

      string += "\n";
    }else{
      // stars
      let newRow = row % rows;
      console.log("ROW", newRow)
      for (let col = 1; col <= rows - newRow; col++) {
        string += "*";
      }
      // spaces
      for (let col = 1; col <= newRow *2; col++) {
        string += " ";
      }
      // stars
      for (let col = 1; col <= rows - newRow; col++) {
        string += "*";
      }
      string += "\n";
    }
  }
  return string;
};

console.log(pattern1(5))
