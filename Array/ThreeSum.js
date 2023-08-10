// Given an integer array nums, return all the triplets [nums[i], nums[j], 
//nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



var threeSum = function(nums) {

    let res = [];
  // Sort the array in ascending order
    nums.sort((a, b) => a - b);
 

    for (const [i, a] of nums.entries()){
        if(i>0 && a == nums[i-1]) continue;

        //[ -4, -1, -1, 0, 1, 2 ]
        
        let left = i+1
        let right = (nums.length) - 1
        while(left < right){
            let threesum = a + nums[left] + nums[right];
            if(threesum > 0){
                right -= 1
            }else
                if(threesum < 0){
                    left += 1
                }
            else{
                res.push([a, nums[left], nums[right]])
                left += 1
                while(nums[left] == nums[left-1] && left < right){
                    left +=1
                }
            }
            
        };
    };
   

    return res
    
};


const nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))