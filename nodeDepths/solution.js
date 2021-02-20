function nodeDepths(root) {
    //solve with stack
      let sum = 0;
      const stack = [{node: root, depth: 0}];
      //start stack w/ root and depth of 0
      while(stack.length > 0){
          const {node, depth} = stack.pop();
          //popping off the top node (to start it's the root)
          if(node === null) continue;
          
          sum += depth;
          //adding depth of that node to sum (to start off it's 0)
          
          stack.push({node: node.left, depth: depth + 1});
          stack.push({node: node.right, depth: depth +1});
          //adding that nodes child nodes to the top of the stack
          //another loop starts and one of child nodes is popped off and goes through the same cycle
          //eventually all nodes will go through and added to sum
      }
      return sum
  }