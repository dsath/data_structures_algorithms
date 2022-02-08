function findCycle(head) {
  if(head === null) {
    return null;
  }
  let currentNode = head;
  const seenNodes = new Set();
  while(!seenNodes.has(currentNode)) {
    if(currentNode.next === null) {
      return null;
    }
    seenNodes.add(currentNode);
    currentNode = currentNode.next;
  }
  return currentNode;
}

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
