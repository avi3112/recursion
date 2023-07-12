{/* <aside>
💡 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45

</aside> */}

// try this already there

function maxele(nums){
    let max=nums[0]
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i+1]){
            if(max<nums[i+1]){
                max=nums[i+1]
            }
        }
    }
    return max

}

const result= maxele([1, 4, 45, 6, 10, -8])
console.log(result)