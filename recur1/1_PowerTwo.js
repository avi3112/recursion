// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16


function powertwo(n) {
    if(n<=0){
        return false
    }
    if(n==1){
        return true
    }
    if(n%2==0){
        return powertwo(n/2)
    }
    else{
        return false
    }
};

const result= powertwo(16)
console.log(result)
