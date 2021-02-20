class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    depthFirstSearch(array) {
      // array is empty and will be returned in the end
          array.push(this.name);
          //add this current node to array
          for(const child of this.children) {
              //for each child of node
              child.depthFirstSearch(array);
              //call depthFirstSearch on
          }
          return(array)
    }
  }

  //ends up doing down to the last node, then up and over to sibling