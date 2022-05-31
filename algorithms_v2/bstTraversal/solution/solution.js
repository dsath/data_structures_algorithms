const {test} = require('./test/test.js');

function inorder(node, nums = []) {
  if(node.left) {
    inorder(node.left, nums);
  }
  nums.push(node.value);
  if(node.right) {
    inorder(node.right, nums);
  }
  return nums;
}
function preorder(node, nums = []) {
  nums.push(node.value);
  if(node.left) {
    preorder(node.left, nums);
  }
  if(node.right) {
    preorder(node.right, nums);
  }
  return nums;
}
function postorder(node, nums = []) {
  if(node.left) {
    postorder(node.left, nums);
  }
  if(node.right) {
    postorder(node.right, nums);
  }
  nums.push(node.value);
  return nums;
}
test(inorder);
test(preorder);
test(postorder);
