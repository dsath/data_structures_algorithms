const { test } = require("./test/test.js");

function fn(list, m, n) {
  let position = 0;
  let myNode = list;
  let front = list;
  while (position < m) {
    front = myNode;
    myNode = myNode.next;
    position++;
  }
  const prev = null;
  let tail = myNode;
  while (position >= m && position <= n) {
    const next = myNode.next;
    myNode.next = prev;
    prev = myNode;
    myNode = next;
    position++;
  }

  front.next = prev;
  tail.next = myNode;
  if (m > 0) {
    return list;
  } else {
    return prev;
  }
}

test(fn);
