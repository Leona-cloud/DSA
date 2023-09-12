

//using binary search
var searchInsert = function(nums, target) {

    let startPointer = 0
    let endPointer = nums.length-1
    let ans = nums.length

    while(startPointer <= endPointer){

        let midPoint = Math.floor((startPointer + endPointer) / 2);

        if(nums[midPoint] === target){
            return midPoint
        } else if(nums[midPoint] < target ){
            startPointer = midPoint + 1
        }else{
            ans = midPoint;
            endPointer = midPoint - 1
        }

    }
    
    return ans
};



const nums = [1,3,5,6]; 
const target = 5

console.log(searchInsert(nums, target))