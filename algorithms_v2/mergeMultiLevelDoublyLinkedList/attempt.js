// mergeMultiLevelDoublyLinkedList
// Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list. These child lists can also have one or more child doubly linked lists of their own, and so on.

// Return the list as a single level flattened doubly linked list.


const {test} = require('./test/test.js');



function fn(head) {
  let currentNode = head;

  while(currentNode !== null) {
    
    if(currentNode.child) {
      let tail = currentNode.child;

      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if(tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
    currentNode = currentNode.next;
  }
  return head;

}


test(fn);

