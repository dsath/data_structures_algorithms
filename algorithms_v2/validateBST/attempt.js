const { test } = require("./test/test");

test(fn);

function fn(root, min = -Infinity, max = Infinity) {
  if (root === null) return true;

  return (
    root.value > min &&
    root.value < max &&
    fn(root.left, min, root.value) &&
    fn(root.right, root.value, max)
  );
}
