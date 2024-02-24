const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
const pattern = (rows) => {
  let string = "";
  for (let row = 1; row <= rows; row++) {
      let index = 0;
    // space
    for (let col = 1; col <= rows - row; col++) {
      string += " ";
    }
    // star
    for (let col = 1; col <= row * 2 - 1; col++) {
        string += alphabets[index];
        if(col < row){
            index++;
        }else{
            index--;
        }
      
    }
    // space
    for (let col = 1; col <= rows - row; col++) {
      string += " ";
    }
    string += "\n";
  }
  return string;
};
console.log(pattern(5));
