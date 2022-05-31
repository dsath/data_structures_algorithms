const {test} = require('../test/test.js');

function bubblesort(array) {
  for(let step = 0; step < array.length-1; step++) {
    for (let i = 0; i < array.length-1-step; i++) {
      if(array[i] > array[i + 1]) {
        swap(array, i, i+1);
      }
    }
  }
  return array;
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}


test(bubblesort);
