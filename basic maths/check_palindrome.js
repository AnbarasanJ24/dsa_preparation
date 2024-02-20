// Palindrome, A number and its reverse version should be same
// 121 === 121 => true
// 7 === 7 => true
// 123 === 321 => false

const reverseNumber = (N)=>{
    let result =0;

    while(N > 0){
        let lastDigit = N %10;
        N = Math.floor(N /10);
        result = (result*10) + lastDigit;
    }

    return result;
}

const checkPalindrome = (N)=>{
    return reverseNumber(N) === N;
}

console.log(checkPalindrome(0))