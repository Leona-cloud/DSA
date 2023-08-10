function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
}


function enqueue(element){
    this.dataStore.push(element)
};

function dequeue(element){
    return this.dataStore.shift()
};

function front() {
    return this.dataStore[0];
 };

function back() {
    return this.dataStore[this.dataStore.length-1];
};

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}


function empty() {
    if (this.dataStore.length == 0) {
    return true;
    }
    else {
    return false;
    }
};

var q = new Queue();
 q.enqueue("Meredith");
 q.enqueue("Cynthia");
 q.enqueue("Jennifer");
 console.log(q.toString());
 q.dequeue();
 console.log(q.toString());
 console.log("Front of queue: " + q.front());
 console.log("Back of queue: " + q.back());







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



 const nums =[2, 7, 11, 15];
 const target = 9;
 console.log(twoSum(nums, target))