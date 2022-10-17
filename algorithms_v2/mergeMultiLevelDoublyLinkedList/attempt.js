const { test } = require("./test/test");

test(fn);

function fn(node) {
  let cn = node;

  while (cn !== null) {
    if (cn.child !== null) {
      merge(cn);
      cn.child = null;
    }
    cn = cn.next;
  }
  return node;
}

// takes node with child and merges child into doubly linked list
function merge(node) {
  let n1 = node;
  let n2 = node.child;
  let n4 = node.next;

  let n3 = node.child;
  while (n3.next !== null) {
    n3 = n3.next;
  }

  n1.next = n2;
  n2.prev = n1;
  n3.next = n4;
  if (n4 !== null) {
    n4.prev = n3;
  }
}
