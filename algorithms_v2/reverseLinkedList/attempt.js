const { test } = require("./test/test");

test(fn);

function fn(node) {
  let cn = node;
  let ln = null;

  while (cn !== null) {
    let nn = cn.next;
    cn.next = ln;
    ln = cn;
    cn = nn;
  }

  return ln;
}
