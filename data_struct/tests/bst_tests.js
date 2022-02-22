let {BinarySearchTree} = require('../bst.js');
let tree = new BinarySearchTree;

tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.print();


let test = [];
function inorder(node, stack) {
  stack.push(node.value);
  if(node.left) {
    inorder(node.left, stack);
  }
  if(node.right) {
    inorder(node.right, stack);
  }
}

// inorder(tree.root, test);
// console.log(test);
