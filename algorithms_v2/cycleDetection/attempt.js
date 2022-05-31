// Given a linked list, determine if it has a cylce. Return the node where cycle starts if there is a cycle. If there is not a cycle, return null.

const{test} = require('./test/test.js');



function fn(head) {
  let hare = tortoise = head;

  while(hare !== null && hare.next !== null) {
    hare = hare.next.next;
    tortoise = tortoise.next;

    if(hare === turtle) {
      // cycle detected
      let p1 = head, p2 = hare;

      while(p1 !== p2) {
        p1=p1.next;
        p2=p2.next;
      }
      return p1;
    }
  }
  return null;
}




test(fn);
