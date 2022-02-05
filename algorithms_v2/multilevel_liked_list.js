class node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
    this.child = null;
  }
}
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

// map that shows level, parent node value and list
function mapLevels(head, lists, level = 1) {
  let allActiveChildren = [];
  let currentList = []; 

  currentNode = Array.isArray(head) ? head[1] : head;
  while(currentNode !== null) {
    if(currentNode.child) {
      allActiveChildren.push([currentNode.value, currentNode.child]);
    }
    currentList.push(currentNode.value);
    currentNode = currentNode.next;
  }

  if(level === 1) {
    currentList = [null, currentList];
  } else {
    currentList = [head[0], currentList];
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

function printLevels(map) {
  for(let level in map) {
    console.log(level, map[level]);
  }
}

let head = createMultiLevel(lists2);
let levels = {};

mapLevels(head, levels);
printLevels(levels);





