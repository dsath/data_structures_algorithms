const {test} = require('../test/test.js');

function breadthFirstSearch(node) {
  let list = [];
  let queue = [];
  queue.push(node);

  while(queue.length > 0) {
    currentNode = queue.shift();
    list.push(currentNode.value);
    if(currentNode.left) {
      queue.push(currentNode.left);
    }
    if(currentNode.right) {
      queue.push(currentNode.right);
    }
  }
  return list;
}

test(breadthFirstSearch);
