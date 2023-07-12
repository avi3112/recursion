// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33


function powthree(n) {
    if (n < 1) return false
    for(let i = 0; i <= n; i++) {
        let num = Math.pow(3, i)
        if (num === n) return true
        if (num > n) return false
    }
};


const result1 = powthree(27);
console.log(result1);

// function powerthree(n) {
//   if (n === 0) return false;
//   if (n === 1) return true;

//   if (n % 3 !== 1) {
//     powerthree(n / 3);
//   } else {
//     return false;
//   }
// }

// const result = powerthree(27);
// console.log(result);
