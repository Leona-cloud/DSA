/**
 * @param {number} n
 */
var MRUQueue = function(n) {

    this.queue = Array.from({length: n}, (_, i) => i + 1)

};

// (_, i) => i + 1: The second argument in Array.from() is a mapping function. 
//It takes two parameters, where _ is a placeholder for the current element (which is unused in this case) and i represents the index. 
//It returns i + 1, effectively generating a sequence of numbers from 1 to n, inclusive.

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {

    const element = this.queue.splice(k-1, 1)
    this.queue.push(element)
    return element;

};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 * 
 */



// Time Complexity:
// splice(k - 1, 1) operation removes an element at index k - 1 from the array.
// push(element) operation adds an element to the end of the array.
// Both these operations are generally O(n), where n represents the number of elements in the queue. However, for splice specifically, removing an element from an array can potentially be O(n) in the worst case because it may require shifting elements after the removed index to fill the gap.

// Therefore, the time complexity of the fetch operation in this implementation can be considered as O(n).

// Space Complexity:
// The space complexity of initializing the queue property in the constructor using Array.from({ length: n }, (_, i) => i + 1) is O(n) because it creates an array of size n to store the elements.