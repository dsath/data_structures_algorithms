const {test} = require('./test/test.js');

// inorder
function fn1(node, list = []) {
  if(node.left) {
    fn1(node.left, list);
  }

  list.push(node.value);

  if(node.right) {
    fn1(node.right, list);
  }
  return list;
}

// postorder
function fn2(node, list = []) {
  if(node.left) {
    fn2(node.left, list);
  }

  if(node.right) {
    fn2(node.right, list);
  }

  list.push(node.value);
  return list;
}
function fn3(node, list = []) {
  list.push(node.value);
  if(node.left) {
    fn3(node.left, list);
  }

  if(node.right) {
    fn3(node.right, list);
  }

  return list;
}
test(fn3);
