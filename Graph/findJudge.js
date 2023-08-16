

var findJudge = function(n, trust) {
  
    const trusts = new Array(n + 1).fill(0); // Index 0 is not used
    const trustedBy = new Array(n + 1).fill(0);

    // [[1,3],[2,3]]

    for([a, b] of trust){
        trustedBy[a]++;
        trusts[b]++;

    };
    console.log(trusts, trustedBy)

    //to find the town judge
    for(let i = 1; i<=n; i++){
        //if judge trusts no one and everyone trusts the judge
        if(trusts[i] === n-1 && trustedBy[i] === 0){
            return i
        }
    }
    
    return -1

};





const n = 3; 
const trust = [[1,3],[2,3]]


console.log(findJudge(n, trust))