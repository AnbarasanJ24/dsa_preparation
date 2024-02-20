// GCD - Greatest common divisor or HCF - Highest comman factors
// N1=9 => 1,3,9
// N2=12 => 1,2,3,4,6,12
// common factors => 1, 3 [Higest is 3]
// GCD is 3

// For prime numbers 1 will be the GCD
// There is a chance any number between them also be GCD
// N1=20 => 1,2,4,5,10,20
// N2=40 => 1,2,4,5,10,20,40
// GCD is 20

const gcd = (num1, num2) => {
  let gcd = 1;
  for (let eachNumber = 1; eachNumber <= Math.min(num1, num2); eachNumber++) {
    if (num1 % eachNumber === 0 && num2 % eachNumber === 0) {
      gcd = eachNumber;
    }
  }
  return gcd;
};
// For (20,40) We can run the loop from 20 and get the gcd qiickly but the same will take worst case T.C for prime number(11,13)
// T.C => O(Min(num1, num2))
// console.log(gcd(11, 13));

// Euclidean Algorthim gcd(a,b) => gcd(a%b,b) when a> b
// When one the number becomes zero then the other number is gcd
const gcd_1 = (a, b) => {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  return a === 0 ? b : a;
};
console.log(gcd_1(20,40))
// T.c O(log five o/ (Min(a,b)))
