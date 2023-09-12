


var checkIfExist = function(arr) {

    // create a new hashMap
    let hashMap = new Map();

    //iterate through the array
    for(let i = 0; i<arr.length; i++){

        let element = arr[i];

        if(hashMap.has(element / 2) || hashMap.has(element * 2)){
            return true
        }

        hashMap.set(arr[i], i)
       
    }
    
  return false
};


const arr =  [10,2,5,3]

console.log(checkIfExist(arr))