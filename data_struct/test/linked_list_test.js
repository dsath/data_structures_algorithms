const {LinkedList} = require('../linked_list.js');

function createRandomLinkedList(num) {
  const thisList = new LinkedList(Math.floor(Math.random()*100));;

  for(let i = 0; i < num - 1; i++) {
    thisList.append(Math.floor(Math.random() * 100));
  }
  return thisList.head;
}

module.exports.createRandomLinkedList = createRandomLinkedList;
