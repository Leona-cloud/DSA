// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

var maxSubArray = function(nums) {

    let maxSub = nums[0];
    let curSum = 0;
    //[-2,1,-3,4,-1,2,1,-5,4]

    for(let i=0; i<nums.length; i++){
        if(curSum < 0){
            curSum = 0
        };
        curSum += nums[i];
        maxSub = Math.max(maxSub, curSum)
    }
    return maxSub
};


const nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSubArray(nums))