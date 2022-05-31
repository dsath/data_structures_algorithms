//////////
// 
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(root) {
  if(!root) return [];
  let queue = [];
  let levelOrder = [];

  queue.push(root);
  while(queue.length > 0) {
    const nodesOnCurrentLevel = queue.length;
    levelOrder.push([]);
    for(let i = 0; i < nodesOnCurrentLevel; i++) {
      const currentNode = queue.shift();
      levelOrder[levelOrder.length - 1].push(currentNode.val);
      if(currentNode.left) {
        queue.push(currentNode.left);
      }
      if(currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }
  return levelOrder;
};
