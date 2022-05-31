const {test} = require('../test/test.js');

function reverseLinkedList(head) {
  let prev = null;
  let currentNode = head;
  while(currentNode) {
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  return prev;
}

test(reverseLinkedList);
