const pattern = (rows) => {
  let value = 0;
  let string = ''
  for (let row = 1; row <= rows; row++) {
    if (row % 2 === 0) value = 0;
    else value = 1;
    for (let col = 1; col <= row; col++) {
        string += value;
        value = 1 - value;
    }
    string += '\n'
  }
  return string;
};

console.log(pattern(5))

