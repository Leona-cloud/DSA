//use two pointer approach


var maxArea = function(height) {

    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxArea = 0;

    while(leftPointer < rightPointer){

        let area = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
        maxArea = Math.max(maxArea, area);
        if(height[leftPointer] < height[rightPointer]){
            leftPointer++
        }else{
            rightPointer--
        }

    }
     
    return maxArea;
    
};



const height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea(height))