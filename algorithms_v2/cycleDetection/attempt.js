const { test } = require("./test/test");

test(fn);

function fn(root) {
  let hare = root;
  let turtle = root;

  while (hare !== null && hare.next !== null) {
    hare = hare.next.next;
    turtle = turtle.next;

    if (hare === turtle) {
      let p = root;
      let q = hare;
      while (p !== q) {
        p = p.next;
        q = q.next;
      }
      return p;
    }
  }
  return null;
}
