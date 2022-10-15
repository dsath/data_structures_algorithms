const { test } = require("./test/test.js");

test(fn);

// three different searches for binary tree inorder, preorder, postorder
// we use preorder traversal, adding the first node seen at each level
function fn(root, level = 0, nums = []) {
  if (root === undefined) return;
  if (nums[level] === undefined) {
    nums[level] = root.value;
  }

  level++;
  fn(root, level, nums);
  return nums;
}
