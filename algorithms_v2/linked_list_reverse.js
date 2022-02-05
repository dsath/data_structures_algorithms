let ls = require('../data_struct/linked_list.js');

let myList = new ls.LinkedList(0);
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);


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
  return head;
}

console.log(myList.printList());
myList.head = mnReverseLinkedList(myList.head, 0, 4);
console.log(myList.printList());

