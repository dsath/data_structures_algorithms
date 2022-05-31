const {test} = require('./test/test.js');


function fn(array) {
  for (let i = 1; i < array.length; i++) {
    let rCheck = i, lCheck = i-1;
    while(lCheck >= 0) {
      if(array[rCheck] < array[lCheck]) {
        swap(array, rCheck, lCheck);
      }
      rCheck--; lCheck--;
    }
  }
  return array;
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}


test(fn);
