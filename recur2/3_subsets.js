// Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

// **Example 1:**

// Input :  set = “abc”

// Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

// **Example 2:**

// Input : set = “abcd”

// Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

function sub(nums) {
  let result = [];
  result.push([]);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let len = result.length;
  }
}
// got stuck