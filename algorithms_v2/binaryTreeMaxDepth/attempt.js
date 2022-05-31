//////////
// 
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(root, count = 0) {

  if(root === null) return count;

  count++;
  return Math.max(fn(root.left, count), fn(root.right, count)); 
  

};
