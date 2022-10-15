const {test} = require('../test/test.js');
test(rightSideView)

function rightSideView(node, currentLevel = 0, view = []) {
  if(!node) return [];
  if(currentLevel === view.length) {
    view.push(node.val);
  }
  if(node.right) {
    rightSideView(node.right, currentLevel+1, view);
  }
  if(node.left) {
    rightSideView(node.left, currentLevel+1, view);
  }
  return view;
}
