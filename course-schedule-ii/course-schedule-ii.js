/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
let visited;
let graph;
let stack;

var findOrder = function(numCourses, prerequisites) {
    
    graph = new Map();
    visited = new Array(numCourses).fill(0);
    stack = new Array();
    
    for(let [v, e] of prerequisites){
        if(graph.has(v)){
            let values = graph.get(v);
            values.push(e);
            graph.set(v, values)
        } else {
            graph.set(v, [e])
        }
    }
    
    for(let i = 0; i < numCourses; i++){
        if(visited[i] == 0 && DFS(i)) return [];
    }
    
    return stack;
}


function DFS(index){
    
    visited[index] = 1;
    let edges = graph.get(index);
    
    if(edges){
        for(let e of edges){
            if(visited[e] == 1) return true;
            if(visited[e] == 0 && DFS(e)) return true
        }  
    }
  
    visited[index] = 2;
    stack.push(index)
    return false
}