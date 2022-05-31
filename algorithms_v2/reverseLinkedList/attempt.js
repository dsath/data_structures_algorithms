// Given a singly-linked list, return it in reverse.
const {test} = require('./test/test.js');

function fn(head) {
  let currentNode = head;
  let previousNode = null;

  while(currentNode !== null) {
    const next = currentNode.next;
    currentNode.next = previousNode; 
    previousNode = currentNode;
    currentNode = next;
  }

  return previousNode;
}

test(fn);



