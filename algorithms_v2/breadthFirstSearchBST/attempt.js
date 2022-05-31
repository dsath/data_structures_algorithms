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
  let queue = [];
  let list = [];

  queue.push(root);
  while(queue.length > 0) {
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
};
