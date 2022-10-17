const { test } = require("./test/test");

test(fn);
function fn(root) {
  const queue = [root];
  const values = [];

  while (queue.length > 0) {
    const nodesOnLevel = queue.length();
    const currentLevel = [];
    for (let i = 0; i < nodesOnLevel; i++) {
      const currentNode = queue.shift;
      if (currentNode.left !== null) {
        currentLevel.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        currentLevel.push(currentNode.right);
      }
    }
    values.push(currentLevel);
  }
  return values;
}
