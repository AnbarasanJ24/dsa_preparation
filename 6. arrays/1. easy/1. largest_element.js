
// Find the largest element in the array 
let arr1 = [13, 56, 41, 39, 32, 8];
// O/P => 56

// Brute Force
// Sort the array, so that largest element will be at the last 
// In case of smallest number, it will be at the front 

arr1.sort((a,b) => a -b);
console.log("Largest", arr1[arr1.length-1])

// T.C => O (N Log N) for sorting
// S.c => O (1)


// Optimal Force

let largest = arr1[0];
for(let index= 1; index < arr1.length ; index++){
    if(arr1[index] > largest){
        largest = arr1[index]
    }
}
console.log("Largest", largest)
// T.C => O (N)
// S.c => O (1)




// let arr1 = [13, 56, 41, 39, 32, 8];

// Brute Force
// T.C => O () 
// S.c => O ()


// Better 
// T.C => O () 
// S.c => O ()

// Optimal 
// T.C => O () 
// S.c => O ()

/**
 * 
 * 
 */