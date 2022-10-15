const { test } = require("./test/test");
test(fn);

function levelOrder(root) {
  if (!root) return [];
  let queue = [root];
  const levelOrderTraversal = [];

  while (queue.length > 0) {
    const count = queue.length;
    const currentLevel = [];
    for (let i = 0; i < count; i++) {
      currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    levelOrderTraversal.push(currentLevel);
  }
  return levelOrderTraversal;
}
