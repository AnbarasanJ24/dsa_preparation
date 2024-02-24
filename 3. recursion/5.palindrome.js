let str = "MADAM";

// Two pointer

const palindrome = (str, index1, index2) => {
  if (index1 >= index2) return true;
  if (str[index1] !== str[index2]) return false;

  return palindrome(str, index1 + 1, index2 - 1);
};

console.log(palindrome(str, 0, str.length - 1));
// reverse(arr, 0, arr.length - 1);
// console.log(arr);

// Since we are increasing and decreasing the index by 1
// We can swap first and last uisng swap(i, n-1-i)
// For every i index, the last digit will be n-1-i

const palindrome_1 = (str, index1) => {
  if (index1 >= Math.floor(str.length / 2)) return true;
  if (str[index1] !== str[str.length - 1 - index1]) return false;

  return palindrome_1(str, index1 + 1);
};
console.log(palindrome_1(str, 0));

// T.C => O (N/2) => Going half of the string
// S.C => O (N/2) => Going half of the string
