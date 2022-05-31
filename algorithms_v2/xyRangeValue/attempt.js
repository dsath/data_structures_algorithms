//////////
// 
//
// Given an array of integers sorted in ascending order, return the start and ending index of a given target value in an array, i,e, [x, y].
// Your solution should run in O(log2N) time.
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(array, target) {
  let firstPosition = x = y = binarySearch(array, 0, array.length-1, target);

  if(firstPosition === -1) return [-1, -1];

  let temp1, temp2;

  while(x !== -1) {
    temp1 = x;
    x = binarySearch(array, 0, x-1, target);
  }

  x = temp1;

  while(y !== -1) {
    temp2 = y;
    y = binarySearch(array, y+1, array.length-1, target);
  }
  y = temp2;

  return [x, y];

};


function binarySearch(array, left, right, numToFind) {
  while(left <= right) {
    let middle = Math.floor((left + right)/2);
    if(numToFind < array[middle]) {
      right = middle - 1;
    } else if(numToFind > array[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}


