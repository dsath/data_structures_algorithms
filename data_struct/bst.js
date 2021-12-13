class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const recurse_insert = (node, newNode) => {
      if(newNode.value < node.value) {
        if(!node.left) {
          node.left = newNode;
        } else {
          recurse_insert(node.left, newNode);
        }
      }

      if(newNode.value > node.value) {
        if(!node.right) {
          node.right = newNode;
        } else {
          recurse_insert(node.right, newNode);
        }
      }
    }
    
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
    } else {
      recurse_insert(this.root, newNode);
    }
    return this;
  }
  lookup(value) {
    return this._find_recurse(this.root, value) === undefined ? false : true;
  }

  remove(value) {
    if(!this.root) {
      return false;
    }

    // parent of node to remove
    const firstParent = this.root.value === value ? new Node : this._find_parent_recurse(this.root, value);
    const nodeToRemove = this._find_recurse(this.root, value);

    if(nodeToRemove.right) {
      var replacingNode = this._find_smallest_recurse(nodeToRemove.right);
      // parent of replacingNode to remove
      var secondParent = this._find_parent_recurse(nodeToRemove.right, replacingNode.value);
    }

    const change_pointers = () => {
      replacingNode.right = nodeToRemove.right;
      replacingNode.left = nodeToRemove.left;
      if(firstParent.right === nodeToRemove) {
        firstParent.right = replacingNode;
      } else {
        firstParent.left = replacingNode;
      }
    }

    // node to remove has no children
    if(!nodeToRemove.right && !nodeToRemove.left) {
      if(nodeToRemove.value === this.root.value) {
        this.root = null;
      }
      if(firstParent.left === nodeToRemove) {
        firstParent.left = null;
      } else { 
        firstParent.right = null;
      }
    }

    // node to remove has left child but no right child
    if(!nodeToRemove.right && nodeToRemove.left) {
        if(nodeToRemove.value === this.root.value) {
          this.root = this.root.left;
        }
        if(firstParent.right === nodeToRemove) {
          firstParent.right = nodeToRemove.left;
        } else {
          firstParent.left = nodeToRemove.left;
        }
    }

    // node to remove has right child
    if(nodeToRemove.right) {
      if(nodeToRemove === this.root) {
        this.root = replacingNode;
      }

      // replacing node has no children
      if(!replacingNode.right && !replacingNode.left) {
        // remove secondParent pointer to replacingNode
        if(secondParent) {
          secondParent.left = null;
        } else {
          nodeToRemove.right = null;
        }
        change_pointers();
      }
      //replacing Node has a right child
      else {
        if(secondParent) {
          secondParent.left = replacingNode.right; 
        } else {
          nodeToRemove.right = null;
        }
        change_pointers();
      }
    }
  }

  _find_recurse(node, value) {
    if(!node) {
      return null;
    } 
    if(node.value === value) {
      return node;
    }
    if(value < node.value) {
      return this._find_recurse(node.left, value);
    }
    if(value > node.value) {
      return this._find_recurse(node.right, value);
    }
  }

  _find_parent_recurse(node, value) {
    if(!node) {
      return null;
    } 
    if(node.value === value) {
      return null;
    }
    if(node.left && node.left.value === value) {
      return node;
    }
    if(node.right && node.right.value === value) {
      return node;
    }
    if(value < node.value) {
      return this._find_parent_recurse(node.left, value);
    }
    if(value > node.value) {
      return this._find_parent_recurse(node.right, value);
    }
  }

  _find_smallest_recurse(node) {
    if(!node) {
      return null;
    }
    if(node.left === null) {
      return node;
    }
    return this._find_smallest_recurse(node.left);
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

// tree.remove(4);
// tree.remove(6);
// tree.remove(20);
tree.remove(1);
tree.remove(15);
tree.remove(170);
tree.remove(9);
const treeString = JSON.stringify(traverse(tree.root));
console.log(treeString);

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

