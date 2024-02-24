
// count the frequency for character array for lower case
// In case of lower case [a,b,c,d ...., z] Assume index 0 is a , index 1 is b and so on
// Programatically we can do this using ASCII value
console.log("Check", "f".charCodeAt(0) - "a".charCodeAt(0));

let characterhash = Array(26).fill(0);
let str = "abcdabc";
let charToCheck = "abcth";

// Pre-computing
for (let ch of str) {
  // For a , ch.charCodeAt(0) => 97 , 'a'.charCodeAt(0) => 97 , so index is 0
  // For b , ch.charCodeAt(0) => 98 , 'a'.charCodeAt(0) => 97 , so index is 1
  // For c , ch.charCodeAt(0) => 99 , 'a'.charCodeAt(0) => 97 , so index is 2
  
  let index = ch.charCodeAt(0) - "a".charCodeAt(0); // Lower case
  // let index = ch.charCodeAt(0) - "A".charCodeAt(0); - Upper case
  characterhash[index] += 1;
}
// Fetching
for (let ch of charToCheck) {
  let index = ch.charCodeAt(0) - "a".charCodeAt(0);
  console.log("character", ch, "frequency", characterhash[index]);
}

// ===============================================================================================

// In above problem, we hace lower case constraint but in case of computing for 256 character there is no issue
// Because 'a' will be pre-computed to 97 and will fetching it will be at 97
let characterhash_1 = Array(256).fill(0);
let str_1 = "A!A!B121aba";
let charToCheck_1 = "A!1aJK*(";
// Pre-computing
for (let ch of str_1) {
  characterhash_1[ch.charCodeAt(0)] += 1;
}
// Fetching
for (let ch of charToCheck_1) {
  console.log("character", ch, "frequency", characterhash_1[ch.charCodeAt(0)]);
}

// Since we have only 256 character, using array will not be issue for character array