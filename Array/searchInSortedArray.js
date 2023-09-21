// using binary search
// set a lowerBound to 0
// set an upperBound to arr.lenght - 1
// midPoint = (lowerBound + upperBound)/2
// if midPoint < target, set lowerBound = midPoint + 1
// if midPoint > target set upperBound = midPoint - 1


var search = function(nums, target) {

    let lowerBound = 0;
    let upperBound = nums.length -1;
   

    while(lowerBound <= upperBound){

        let midPoint = Math.floor((upperBound + lowerBound) / 2);

        if(nums[midPoint] === target){
            return midPoint;
        };

        if(nums[lowerBound] <= nums[midPoint]){
                
            if(nums[lowerBound] <= target && target < nums[midPoint]){
                 upperBound = midPoint - 1
            }else{
                lowerBound = midPoint + 1
            }
        }else{
            if(nums[midPoint] < target && target <= nums[upperBound]){
                lowerBound = midPoint + 1
            }else{
                upperBound = midPoint - 1
            }

        }


    }


    return  -1;
};



const nums = [4,5,6,7,0,1,2]; 
const target = 0;

console.log(search(nums, target))