//Breadth first algorithm

function validPath(edges, n, source, destination) {
  const graph = new Array(n).fill(null).map(() => []);


  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }



  const visited = new Array(n).fill(false);
  const queue = [];
  queue.push(source);
  visited[source] = true;
 

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === destination) {
      return true;
    }
    if (Array.isArray(graph[node])) {
      for (const neighbor of graph[node]) { //
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
  }

  return false;
}

const edges = [
  [0, 1],
  [1, 2],
  [2, 0],
];
const source = 0;
const destination = 2;
const n = 3;
const path = validPath(edges, n, source, destination);
console.log(path);
