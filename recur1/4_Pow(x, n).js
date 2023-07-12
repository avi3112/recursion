// Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

// Example 1:

// Input: x = 2.00000, n = 10
// Output: 1024.00000
// Example 2:

// Input: x = 2.10000, n = 3
// Output: 9.26100


function powern(x, n) {
    if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return 1 / powern(x, -n);
  }
  return x * powern(x, n - 1);
};

const result= powern(2.10000,3)
console.log(result)