// Given an array, find a product of all array elements.

// **Example 1:**

// Input  : arr[] = {1, 2, 3, 4, 5}
// Output : 120
// **Example 2:**

// Input  : arr[] = {1, 6, 3}
// Output : 18

function findSum(nums){
    let product = 1;
    for (let x = 0; x <nums.length; x++){
        product =product*nums[x];
    }
    return product
}
 
 const result= findSum([1, 2, 3, 4, 5])
 console.log(result)
