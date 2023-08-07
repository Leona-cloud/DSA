function Graph(v) {
  this.vertices = v;
  this.edges = 0;
  this.adj = []; //adjacent vertices
  for (var i = 0; i < this.vertices; i++) {
    this.adj[i] = [];
    this.adj[i].push("");
  }
  this.addEdge = addEdge;
  this.showGraph = showGraph;
  this.dfs = dfs;
  this.marked = [];
  for (var i = 0; i < this.vertices; ++i) {
    this.marked[i] = false;
  }
}

//[ [ '' ], [ '' ], [ '' ], [ '' ], [ '' ] ]
function addEdge(v, w) {
  this.adj[v].push(w);
  this.adj[w].push(v);
  this.edges++;
}
function showGraph() {
  for (var i = 0; i < this.vertices; i++) {
    process.stdout.write(i + " -> ");
    for (var j = 0; j < this.vertices; j++) {
      if (this.adj[i][j] !== undefined) {
        process.stdout.write(this.adj[i][j] + " ");
      }
    }
    console.log();
  }
}


function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log("Visited vertex: " + v);
    }
    if (Array.isArray(this.adj[v])) {
        for (var w of this.adj[v]) {
            if (!this.marked[w]) {
                this.dfs(w);
            }
        }
    }
    
}
  

g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(4);