// add a method reverse() to the linked list that reverses the entire list of nodes

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    // Create new node
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {

    if (index >= this.length) {
      return this.append(value);
    }

    if(index === this.length - 1) {
      return this.append(value);
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    let currentNode = this.traverseToIndex(index - 1);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  remove(index) {
    let leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
  reverse() {
    if(!this.head.next) {
      return this;
    }
    let first = this.head;
    let second = first.next;
    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.tail = this.head;
    this.tail.next = null;
    this.head = first;
    return this;
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
console.log(myLinkedList.head);
console.log(myLinkedList.tail);



