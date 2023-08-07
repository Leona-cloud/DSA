// There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph 
//is a graph where there is one center node and exactly n - 1 edges that connect the center node with 
//every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there 
//is an edge between the nodes ui and vi. Return the center of the given star graph.


// function findCenter(edges){
//     const edge1 = edges[0][0]
//     const edge2 = edges[0][1];

//     if(edges[1][0] === edge1 || edges[1][1] === edge1){
//         return edge1;
//     } else {
//         return edge2;
//     }

    
// }


function findCenter(edges){

    const graph = new Map();

    for (const [u, v] of edges) {
        if(!graph.has(u)) graph.set(u, [])
        if(!graph.has(v)) graph.set(v, []);

        graph.get(u).push(v)
        graph.get(v).push(u);
        
    }

    for (const [node, neighors] of graph.entries()) {
        if(neighors.length === edges.length){
            return node
        }
    };

    return -1
    
}




const edges = [[1,2],[5,1],[1,3],[1,4]]
const center = findCenter(edges);
console.log('Center', center)