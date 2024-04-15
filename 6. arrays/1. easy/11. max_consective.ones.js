// Find the maximum consective ones in the array
let arr = [1, 1, 0, 1, 1, 1,0, 1, 1];
// we have three pairs [1,1] & [1,1,1] & [1,1]
// The max ones lenth is 3

// Brute 
// Run outer while loop to select a value and inner while loop to check the value equal to zero or not 
// If the value is zero then the value before that would be 1, so calculate the current length
// Compare the current length with max length and break the loop 
// Also move the i value next to the found zero value to avoid chekcing the same value again 

const maxConsecutiveOnes_brute =(arr)=>{
  let max= Number.MIN_SAFE_INTEGER;
  let i=0;
  let length = arr.length;
  while(i < length){
    let j =i;
    while(j < length){
      if(arr[j] === 0){
        let currenLength = j -i;
        max = Math.max(max, currenLength);
        i = j;
        break;
      }
      j++
    }
    i++;
  }
  return max
}

console.log(maxConsecutiveOnes_brute(arr))

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
