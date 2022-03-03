let {sorting_test} = require('../sorting_test.js');

function sort_outer(array) {
  insertionsort(array);
  return array;
}

function insertionsort(array) {
  for (let i = 1; i < array.length; i++) {
    let rightCheck = i;
    let leftCheck = i-1;
    while(leftCheck >= 0 && array[rightCheck] < array[leftCheck]) {
      swap(array, rightCheck, leftCheck);
      rightCheck--; leftCheck--;
    }
  }
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}

sorting_test(sort_outer);
