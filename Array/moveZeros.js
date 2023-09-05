// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */

// Question
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// var moveZeroes = function(nums) {
//     let zeros = []
//     let nonZeros = []
//     nums.filter((number)=>{
//         if(number === 0){
//             zeros.push(number)
//         }else{
//             nonZeros.push(number)
//         }
//     });
//     console.log(zeros, nonZeros.concat(zeros))
//     return nums = nonZeros.concat(zeros)
// };

var moveZeroes = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }

  for (let i = count; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

const nums = [0, 1, 0, 3, 12];
const moveZero = moveZeroes(nums);
console.log(moveZero, "here");
