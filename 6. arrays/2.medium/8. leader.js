/**
You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.

Example 1:

Input: [100, 200, 1, 3, 2, 4]
Output:4
Explanation: The longest consecutive subsequence is 1, 2, 3, and 4.

Input: [3, 8, 5, 7, 6]
Output: 4
Explanation: The longest consecutive subsequence is 5, 6, 7, and 8.
 */


const arr = [10, 22, 12, 3, 0, 6];
// Brute
// Do two loops, Take a element and make sure all the remaining values are smaller than it
// Which means check any value greater than the current then it can't be leader

const leaderBrute = (arr) => {
  let leaders = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
};

console.log(leaderBrute(arr));

// T.C => O (N^2) (Nearly)
// S.C => O (1)

// Optimal
// There is no need to check all elements to confirm the leader or not
// Keep track the max element till the point, if the current element is greater than max then it will be leader
// Update the max for checking other leaders

const leaderOptimal = (arr) => {
  let max = arr[arr.length - 1];
  let leaders = [];
  leaders.push(max);

  for (let index = arr.length - 2; index >= 0; index--) {
    if (arr[index] > max) {
      max = arr[index];
      leaders.push(max);
    }
  }
  return leaders.reverse();
};

console.log(leaderOptimal(arr));

// T.C => O (N)
// S.C => O (1)
