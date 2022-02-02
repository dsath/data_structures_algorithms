let ls = require('../data_struct/linked_list.js');

let myList = new ls.LinkedList(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);


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
  let beforeM = null; let afterN = null;
  let mNode = null; let nNode = null;
  
  
  // find first node that will be reversed
  let currentNode = head;
  let prev = null
  for(let i = 0; i < m; i++) {
    prev = currentNode;
    currentNode = currentNode.next;
  }
  beforeM = prev;
  mNode = currentNode;

  //reverse nodes until final node to be reveresed
  for(let i = 0; i < n - m + 1; i++) {
    console.log('hi');
    let next = currentNode.next;
    currentNode.next = prev;
    prev = currentNode;
    currentNode = next;
  }
  afterN = currentNode;
  nNode = prev;

  
  if(beforeM) {
    beforeM.next = nNode;
  } else {
    head = nNode;
  }
  mNode.next = afterN;
  return head;
}

  // console.log(`mNode:  ${mNode.value}`, `nNode: ${nNode.value}`, `beforeN: ${beforeM.value}`, `afterN: ${afterN.value}`);
  // console.log(afterN);
  // console.log(beforeM.next);

// myList.tail is wrong after running the function
console.log(myList.printList());
myList.head = mnReverseLinkedList(myList.head, 4, 4);
console.log(myList.printList());

