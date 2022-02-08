let multiLevelLL = require('./multilevel_linked_lists');
let createList = multiLevelLL.createMultiLevel;
let list = [1, [2, [7, [8, [10, 11]], 9]], 3, 4, [5, [12, 13]], 6];
let head = createList(list);


function flatten (head) {
  let currentNode = head;
  while(currentNode !== null) {
    if(currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      
      let tail = currentNode.child;
      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }
      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }
  return head;
}

head = flatten(head);
let map = {}
multiLevelLL.mapLevels(head, map);
multiLevelLL.printLevels(map);


