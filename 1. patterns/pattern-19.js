let string = "";
const pattern1 = (rows) => {
  for (let row = 0; row < rows; row++) {
    // stars
    for (let col = 1; col <= rows - row; col++) {
      string += "*";
    }

    // spaces
    for (let col = 1; col <= row *2 ; col++) {
      string += " ";
    }

     // stars
     for (let col = 1; col <= rows - row ; col++) {
      string += "*";
    }

    string += "\n";
  }
};
const pattern2 = (rows) => {
  for (let row = 1; row <= rows; row++) {
    // stars
    for (let col = 1; col <= row; col++) {
      string += "*";
    }

    // spaces
    for (let col = 1; col <= (2*rows)-(row *2) ; col++) {
      string += " ";
    }

     // stars
     for (let col = 1; col <= row ; col++) {
      string += "*";
    }

    string += "\n";
  }
  return string;
};
console.log(pattern1(5));
console.log(pattern2(5));

function printS() {
  const size = 5; // Define the size of the S pattern

  for (let i = 0; i < size; i++) {
      let line = ''; // Initialize an empty string for each line

      for (let j = 0; j < size; j++) {
          if (i === 0 || i === size - 1 || i === Math.floor(size / 2)) {
              line += '* '; 
          } else if (j === 0 && i < Math.floor(size / 2)) {
              line += '* ';
          } else if (j === size - 1 && i > Math.floor(size / 2)) {
              line += '* '; 
          } else {
              line += '  ';
          }
      }

      console.log(line); 
  }
}

// Call the function to print the S pattern
printS();
let pat= `
***************
*****     *****
*** * * * * ***
**  *        **
*   * * * *   *
*         *   *
**  * * * *  **
****       ****
*****     *****
***************`
console.log(pat)



