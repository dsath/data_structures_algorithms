const { test } = require("./test/test");

function fn(root) {
  const queue = [root];
  const list = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }
  }

  return list;
}
test(fn);
