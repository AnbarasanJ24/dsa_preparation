

const reverseNumber = (N)=>{
    let result =0;

    while(N > 0){
        let lastDigit = N %10;
        N = Math.floor(N /10);
        result = (result*10) + lastDigit;
    }

    return result;
}

var reverse = function(x) {
    
    let isNegative = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let result = 0;
    let remainder = 0;
    
    while(x !== 0){
        remainder = x % 10;
        result = result *10 + remainder;
        x = Math.floor(x/10);
    }
    
    if(result > 2**31) return 0;
    
    return result * isNegative;
};

console.log(reverseNumber(12345))
