
// Initialize two pointers, lowerBound and upperBound, representing the start and end indices of the search space.
// Enter a while loop as long as lowerBound is less than upperBound.
// Calculate the midpoint mid using the formula mid = Math.floor((upperBound + lowerBound) / 2).
// Compare the value at index mid with the value at index upperBound to determine which half of the array contains the minimum element.
// If nums[mid] > nums[upperBound], it means the minimum element lies in the upperBound half of the array. Update lowerBound = mid + 1 to search in the upperBound half.
// Otherwise, the minimum element lies in the lowerBound half of the array, including the mid index. Update upperBound = mid to search in the lowerBound half.
// Repeat steps 3-4 until the search space is narrowed down to a single element, i.e., lowerBound >= upperBound.
// Return the value at nums[lowerBound] as the minimum element.





var findMin = function(nums) {


    let lowerBound = 0;
    let upperBound = nums.length -1;


    while(lowerBound < upperBound){

        let midPoint = Math.floor((upperBound + lowerBound) / 2);
        console.log(lowerBound, upperBound)

        if(nums[midPoint] > nums[upperBound]){
            lowerBound = midPoint + 1
        }else{
            upperBound = midPoint
        }

    }

    return nums[lowerBound]
    
};


const nums = [4,5,6,7,0,1,2];

console.log(findMin(nums))