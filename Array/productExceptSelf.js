// Given an integer array nums, return an array answer such that answer[i] is equal 
// to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.




var productExceptSelf = function(nums) {

    //[1,2,3,4]
    //[1, 1, 1, 1]
    let res = new Array(nums.length).fill(1);
    let prefix = 1;

    for (let i = 0; i<nums.length; i++){
        res[i] = prefix
        prefix *= nums[i]
    }
   let postfix = 1
   for(let i = nums.length-1; i>=0; i--){
        res[i] *= postfix
        postfix *= nums[i]
   };

   return res
    
};


const nums =  [1,2,3,4]
console.log(productExceptSelf(nums))