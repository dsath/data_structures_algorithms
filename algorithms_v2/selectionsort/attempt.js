//////////
// selection sort
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn);


function fn(array) {
  for(let i = 0; i < array.length - 1; i++) {
    let curLow = i;
    for(let j = i + 1; j < array.length; j++) {
      if(array[j] < array[curLow]) {
        curLow = j;
      }
    }
    swap(array, i, curLow);
  }
  return array;
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}
