function twoSum(nums, target){
    let map = new Map;

    for(let i =0; i<nums.length; i++){
        let complement = target-nums[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }

        map.set(nums[i], i)
    }
 }



//  function twoSum(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     // If no such pair is found, return an empty array or handle it as needed
//     return [];
// }


 const nums =[2, 7, 11, 15];
 const target = 9;
 console.log(twoSum(nums, target))