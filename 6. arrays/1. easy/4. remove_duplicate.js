let arr = [1, 1, 2, 2, 2, 3, 3, 3];

// Brute
// Get unique value using set
// Loop each value in set and set inplace in source array
// Index will carry the length of the unique value

const removeDuplicate = (arr) => {
  let set = new Set();
  for (let index = 0; index < arr.length; index++) {
    set.add(arr[index]);
  }
  let index = 0;
  set.forEach((value) => {
    arr[index] = value;
    index++;
  });
  return index;
};

console.log(removeDuplicate(arr), arr);
// T.C => O (N Log N)for each N value set insertion will take log N time + N for looping the set
// S.c => O (N) for set

// Optimal
// In sorted array, duplicates will be immediate next to the current element
// Two pointer approach - i will maintain the unique values
// j will be used to check the value is unique or duplicate
// Take one element as i and check the next element value not equal to J that is unique value

const removeDuplicates_1 = (arr) => {
  if (arr === null || arr.length === 1) return arr;
  //   Assume unique value index is 0
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    // Any value other than unique is also another unique value
    if (arr[j] != arr[i]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }

  return i+1;
};

// T.C => O (N)
// S.c => O (1)
