let {createRandomBST} = require('../bst_test.js');

let tree = createRandomBST(25, 100, false);

function rightView(node, currentLevel, view = []) {
  if(!node) return;
  if(currentLevel === view.length) {
    view.push(node.value);
  }
  if(node.right) {
    rightView(node.right, currentLevel+1, view);
  }
  if(node.left) {
    rightView(node.left, currentLevel+1, view);
  }
  return view;
}

tree.print();

let results = rightView(tree.root, 0);

console.log(results);






