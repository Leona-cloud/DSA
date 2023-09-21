// Given an integer array nums, return true if any value appears at least twice in the array, 
//and return false if every element is distinct.




var containsDuplicate = function(nums) {

    const hashSet = new Map();

    for (let i = 0; i<nums.length; i++){
        if(hashSet.has(nums[i])){
            return true
        }
        hashSet.set(nums[i], i)
    }
    return false
};

const nums = [1,2,3,4];
console.log(containsDuplicate(nums))


const split = "https://open.spotify.com/playlist/66S0KszPK9UM4amvxj4xBI?si=2c6045cd66284f74&nd=1"
const removeQuestionMark = split.toString().split('/')
const getId = removeQuestionMark[4].split('?')

console.log(getId[0])