// Given a linked list and numbers m and n, return it back with only positions m to n in reverse.
const {test} = require('./test/test.js');

function fn(head, m, n) {
  let position = 0;
  let currentNode = head; 
  let start = head;

  while(position < m) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  let newList = null;
  let tail = currentNode;

  while(position >= m && position <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    position++;
  }

  start.next = newList;
  tail.next = currentNode;

  if(m > 0) {
    return head;
  } else {
    return newList;
  }

}

test(fn); 
