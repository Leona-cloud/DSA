var Leaderboard = function() {

    this.map = new Map()
    
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */

// addScore(playerId, score)
// Time Complexity: O(1)
Leaderboard.prototype.addScore = function(playerId, score) {

    if(this.map.has(playerId)){
        const value = this.map.get(playerId);
        score = value + score
    };

    this.map.set(playerId, score)
    
};

/** 
 * @param {number} K
 * @return {number}
 */
// top(K)
// Time Complexity: O(N log N)
Leaderboard.prototype.top = function(K) {

    let arr = Array.from(this.map.values()).sort((a, b) => b - a)
    let sum = 0;
    let index = 0;

    while(K--){
        sum = arr[index++]
    }
    return sum
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {

    this.map.delete(playerId)
    
};


//use maxHeap to return element
/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */

//Space Complexity: O(N)
//Time Complexity: O(N log N)
