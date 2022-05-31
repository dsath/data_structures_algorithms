const {test} = require('../test/test.js');

function floydAlgorithm(head) {
  let tortoise = hare = head;
  while(hare !== null && hare.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
    if(tortoise === hare) {
      let p1 = head;
      let p2 = tortoise;
      while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
      }
      return p1;
    }
  }
  return null;
}

test(floydAlgorithm);
