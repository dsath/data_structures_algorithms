class node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.child = null;
  }
}
// let lists = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12];
let lists = [1, 2, [3, [7, [8, [11, 12]], 9, 10]], 4, 5, 6];
let lists2 = [1, 2, [3, [7, [8, [11, 12]], 9, 10]], [4, [5, [2, [99]], 4]], 5, 6];

function createMultiLevel(lists) {
  let head = null;
  let previousNode = null;
  for(let p = 0; p < lists.length; p++) {
    let newNode = new node(null);

    if(Array.isArray(lists[p])) {
      newNode.value = lists[p][0];
      newNode.child = createMultiLevel(lists[p][1]);
    } else {
      newNode.value = lists[p];
    }

    newNode.prev = previousNode;
    if(previousNode === null) {
      head = newNode;
    } else {
      previousNode.next = newNode;
    }
    previousNode = newNode;
  }
  return head;
}

function mapLevels(head, lists, level = 1) {
  let allActiveChildren = [];
  let currentList = []; 

  currentNode = head;
  while(currentNode !== null) {
    if(currentNode.child) {
      allActiveChildren.push(currentNode.child);
    }
    currentList.push(currentNode.value);
    currentNode = currentNode.next;
  }
  if(lists[level] === undefined) {
    lists[level] = [];
    lists[level].push(currentList);
  } else {
    lists[level].push(currentList);
  }
  level = level + 1;
  for(let i = 0; i < allActiveChildren.length; i++) {
    mapLevels(allActiveChildren[i], lists, level);
  }
}

let head = createMultiLevel(lists2);
let levels = {};

mapLevels(head, levels);
console.log(levels);





