//Question -   Sort Array By Parity
// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.


var sortArrayByParity = function(nums) {
    let even = []
    let odd = []
        for (let i =0; i<nums.length; i++){
           if(nums[i] % 2 === 0 && nums[i] !== 1){
               even.push(nums[i]);
           }else{
            odd.push(nums[i])
           }
           
        }
        const newA = even.concat(odd)
        
        return nums = newA
        
    };

   const  nums1 = [3,1,2,4]
   const sortA = sortArrayByParity(nums1)
   console.log(sortA, 'hello')