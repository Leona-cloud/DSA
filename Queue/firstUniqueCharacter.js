// Given a string s, find the first non-repeating character in it and return its index.
//  If it does not exist, return -1.


var firstUniqChar = function(s) {

    const graph = new Map();


    for (const string of s) {
        graph.set(string, (graph.get(string) || 0) + 1);
    };
    
    for(let i=0; i<s.length; i++){
        if (graph.get(s[i]) === 1) {
            return i;
        }
    }

    // console.log(graph);
    return -1
    
};

const s = "leetcode"


const center = firstUniqChar(s);
console.log(center)