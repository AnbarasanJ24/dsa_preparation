const pattern1 = (rows) => {
  let string = "";
  for (let row = 0; row < (2*rows) -1; row++) {
    for (let col = 0; col < (2*rows) -1; col++) {
      let top = row;
      let bottom = (2*rows-2) - top; 
      let left = col;
      let right = (2*rows-2)- left;
      string += rows - Math.min(top, bottom, left, right) + " ";
    }

    string += "\n";
  }
  return string;
};

console.log(pattern1(4));
