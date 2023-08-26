


var maxProduct = function(nums) {

    let subArray = nums[0];
    let maxProduct = nums[0];
    let minProduct = nums[0]

    for (let i = 1; i < nums.length; i++){
        let currProduct = Math.max(nums[i], maxProduct * nums[i], minProduct * nums[i]);
        console.log(currProduct)
        minProduct = Math.min(nums[i], maxProduct * nums[i], minProduct * nums[i]);
        maxProduct = currProduct;
        subArray = Math.max(maxProduct, subArray)
    }


    return subArray
};



const nums = [2,3,-2,4]

console.log(maxProduct(nums))