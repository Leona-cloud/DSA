// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise,
// add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.



function Node(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
}

var LRUCache = function (capacity) {

    this.cache = new Map()
    this.capacity = capacity
    this.left = new Node(0, 0)
    this.right = new Node(0, 0)
    this.left.next = this.right;
    this.right.prev = this.left
};

/** 
 * @param {number} key
 * @return {number}
 */

LRUCache.prototype.insert = function (node) {
    const prev = this.right.prev;
    const next = this.right;
    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev
}

// Remove node from the list. 
LRUCache.prototype.remove = function (node) {

    const left = node.prev;
    const right = node.next;
    left.next = right;
    right.prev = left;

}

LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        const node = this.cache.get(key);
        this.remove(node);
        this.insert(node);
        return node.value
    };

    return -1

};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {

    if (this.cache.has(key)) {
        this.remove(this.cache.get(key))
    };

    const node = new Node(key, value);
    this.insert(node);
    this.cache.set(key, node);
    if (this.cache.size > this.capacity) {
        const lru = this.left.next;
        this.cache.delete(lru.key);
        this.remove(lru)
    }

};