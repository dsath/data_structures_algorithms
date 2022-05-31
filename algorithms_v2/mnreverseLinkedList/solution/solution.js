const {test} = require('../test/test.js');

function mnReverseLinkedList(head, m, n) {
  let position = 0, currentNode = head;
  let start = head;

  while(position < m) {
    start = currentNode;
    currentNode = currentNode.next;
    position++;
  }

  let newList = null, tail = currentNode;

  while(position >= m && position <= n) {
    const next = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = next;
    position++;
  }

  // if m === 0, start, tail, and head all point to the same node
  start.next = newList;
  tail.next = currentNode;

  // return newList if head is included in the reversed portion of the array,
  // else return the original head.
  if(m > 0) {
    return head;
  } else {
    return newList;
  }
}

test(mnReverseLinkedList);
