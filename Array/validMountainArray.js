


var validMountainArray = function(arr) {


    if(arr.length < 3) return false;

    const greatestElement = arr.indexOf(Math.max(...arr));
    
    if(greatestElement === 0 || greatestElement === (arr.length - 1)) return false;


    for (let i = 0, j = 1; i < arr.length - 1, j < arr.length; i++, j++) {
        console.log('here')

        if(arr[i] === arr[j]) return false;
        console.log('here', 'l')
        if((i < greatestElement && j < greatestElement && arr[i] > arr[j]) || (i > greatestElement && j > greatestElement && arr[i] < arr[j])){
            return false
        }
    }

   return true
    
};


const arr = [0,3,2,1]

console.log(validMountainArray(arr))