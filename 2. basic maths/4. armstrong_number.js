//  A number and summation of each number with the number of digit will be same
// 371 => 3^3 + 7^3 + 1^3 === 371 => true
// 12 => 1^2 + 2^2 === 12 => false
// 1634 => 1^4 + 6^4 + 3^4 + 4^4

const countDigits_1 = (N)=>{
    return Math.floor(Math.log10(N)) + 1
}

const armStrong = (N) => {
  let result = 0;
  let copy = N;
  let numofDigits = countDigits_1(N);
  while (N > 0) {
    let lastDigit = N % 10;
    N = Math.floor(N / 10);
    result = result + lastDigit ** numofDigits;
  }

  return result === copy
};

console.log(armStrong(371))
