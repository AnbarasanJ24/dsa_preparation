// Find the maximum consective ones in the array
let arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];
// we have three pairs [1,1] & [1,1,1] & [1,1]
// The max ones lenth is 3

// Optimal
// Loop the array and check the element is 1 or 0
// If its a one then increase the count and check max
// If its a zero then reset the count back to 0

const maxConsecutiveOnes = (arr) => {
  let count = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] ===1){
        count++;
        if(count > max){
            max = count;
        }
    }else{
        
        count = 0;
    }
  }
  return max;
};

console.log(maxConsecutiveOnes(arr))
// T.C => O(N)
// S.C => O(1)
