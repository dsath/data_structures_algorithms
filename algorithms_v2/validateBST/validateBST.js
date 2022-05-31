// How can you validate a Binary Search Tree? Code it.
const {test} = require('./test/test.js');




function fn(node, min, max) {
  if(node === null) {
    return true;
  }

  const res1 = fn(node.left, min, node.value);

  const res2 = fn(node.right, node.value, max);

  return node.value < max && node.value > min && res1 && res2;

}





test(fn);
