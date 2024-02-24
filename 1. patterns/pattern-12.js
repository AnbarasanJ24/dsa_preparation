const pattern = (rows) => {
  let string = "";
  for (let row = 1; row <= rows; row++) {
    // number
    for (let col = 1; col <= row; col++) {
      string += col;
    }

    // space
    // (2*N)-(2*row)
    // 8 - 2 = 6, 8-4 = 4, 8-6 =2, 8-8 =0
    for(let col=1; col <= (2*rows)- (2*row); col++){
      string += " "
    }

    // number
    for (let col = row; col >= 1; col--) {
      string += col;
    }

    string += "\n";
  }
  return string;
};

console.log(pattern(4));
