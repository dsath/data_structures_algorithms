const {test} = require('../test/test.js');
test(maxDepth)

function maxDepth(node, height=0) {
  if(!node) return height;
  height++;
  let maxDepthLeft = maxDepth(node.left, height);
  let maxDepthRight = maxDepth(node.right, height);
  return Math.max(maxDepthLeft, maxDepthRight);
}
