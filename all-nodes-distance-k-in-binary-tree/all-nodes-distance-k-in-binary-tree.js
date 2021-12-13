/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */

var distanceK = function(root, target, K) {
    let treeGraph = {}
    let seen = {}
    let targetNode = null
    let ele = []
    let queue = []
    function Travers(node,prev){
        if(node == null){
            return
        }
        Travers(node.left,node)
        if(node.val == target.val){
            targetNode = node
        }
        treeGraph[node.val] = prev
        Travers(node.right,node)
    }
    
    function findK(node,depth){
        
        if(!node){
            return
        }
        if(seen[node.val]){
            return
        }else{
            seen[node.val] = true
        }
        if(depth == K){
            ele.push(node.val)
            return
        }else{
            findK(node.left,depth+1)
            findK(node.right,depth+1)
            findK(treeGraph[node.val],depth+1)
        }
    }
    Travers(root,null)
    findK(targetNode,0)
    return ele
};

// problem: cannot define what numbers on left or right sides of parents
/*
findMaps = (root, level, maps, target) => {
    if(root == null) return;
    
    maps.set(level, maps.has(level) ? [...maps.get(level), root.val] :  [root.val]);
    root.left != null && findMaps(root.left, level+1, maps, target);
    root.right != null && findMaps(root.right, level+1, maps, target);
}

var distanceK = function(root, target, k) {
    let maps = new Map();
    let output = [];
    
    findMaps(root, 0, maps, target);
    maps.forEach ((value, key) => {
        console.log(key, value);
        if(value.includes(target.val)) {
            maps.has(key + k) && output.push(...maps.get(key+k));
            maps.has(Math.abs(k - key)) && output.push(...maps.get(Math.abs(k - key)).filter((a) => a != target.val));
            // return;
        }
    });
    
    return output;
};
*/