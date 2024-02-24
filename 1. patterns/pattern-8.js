//https://takeuforward.org/pattern/pattern-7-star-pyramid/

// Pattern is space, star, space
const pattern8 = (rows) => {
  let string = "";

  for (let row = 0; row < rows; row++) {
    // space
    for (let col = 0; col < row; col++) {
      string += " ";
    }
    // star
    // N = 5
    // 0 => 9 (N*2)-(row*2)-1 => 10-0-1 = 9
    // 1 => 7  => 10-2-1 = 7
    // 2 => 5 => 10-4-1 = 5
    // 3 => 3 => 10-6-1 = 3
    // 4 => 1 => 10-8-1 = 1
    for (let col = 0; col < rows * 2 - row * 2 - 1; col++) {
      string += "*";
    }
    // space
    for (let col = 0; col < row; col++) {
      string += " ";
    }
    string += "\n";
  }
  return string;
};
console.log(pattern8(10));
