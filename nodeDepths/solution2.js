function nodeDepths(root, depth = 0) { //depth starts at 0 w/ the root node
    if(root === null) return 0;
    //want to return 0 so it doesn't exit or add another value to to depth(aka sum)
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth +1);
    // will return the sum of current depth, depth of left child node, depth of right child node
    // recursion - will go through all of the nodes and final sum will be the sum of all nodes depth
}
    
// function nodeDepths(root) {
// 	return helper(root, 0);
// }

// function helper(node, depth){
//   if(node === null) return 0;
	
// 	return depth + helper(node.left, depth + 1) + helper(node.right, depth +1);
// }
//same as above but with helper function
  
// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}