
const countDigits = (N)=>{
    let count = 0;

    // Extract last digit => N %10
    // Remove last digit  => N/ 10

    while(N !== 0){
        let lastDigit = N %10;
        console.log("Last Digit", lastDigit)
        N = Math.floor(N /10);
        count++;
    }
    
    return count;
}
// T.C => O (log10 (N))
// The number is divisible by 10 until it becomes zero
// In case of divisible by 2 then O (log2 (N))
// In case of division or multiplication, the time complexity will be logrithemic

const countDigits_1 = (N)=>{
    return Math.floor(Math.log10(N)) + 1
}

console.log(countDigits_1(12345))