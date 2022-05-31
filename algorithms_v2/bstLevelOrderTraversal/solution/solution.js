const {test} = require('../test/test.js');
test(levelOrder)

function levelOrder(root) {
  if (!root) return [];
  let levels = [];
  let q = [root];

  while(q.length > 0) {
    const currentLevelValues = [];
    let length = q.length, count = 0;

    while(count < length) {
      let currentNode = q.shift();
      if(currentNode.left) {
        q.push(currentNode.left);
      }
      if(currentNode.right) {
        q.push(currentNode.right);
      }
      currentLevelValues.push(currentNode.val);
      count++;
    }
    levels.push(currentLevelValues);
  }
  return levels;
}
