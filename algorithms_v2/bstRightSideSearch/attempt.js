//////////
// 
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(root, count = 0, list = []) {

  if(count === list.length) {
    list.push(root.value);
  }
  count++;
  if(root.right) {
    fn(root.right, count, list); 

  }
  if(root.left) {
    fn(root.left, count, list); 
  }
};
