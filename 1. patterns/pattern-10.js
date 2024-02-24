const pattern = (rows) => {
  let string = "";
  for (let row = 1; row <= (2*rows)-1; row++) {
    let stars = row;
    if(row > rows) stars = (2*rows)- row;
    for (let col = 1; col <= stars; col++) {
      string += "*";
    }
    string += "\n";
  }
  return string;
};

console.log(pattern(5))