//////////
// quickSelect
// Given an unsorted array, return the kth largest element. It is the kth largest element in sorted order, not the kth distinct element.//
//
//
//////////
const {test} = require('./test/test.js');
test(fn_outer);

function fn_outer(array, kth) {
  const indexToFind = array.length - kth;
  return fn(array, 0, array.length-1, indexToFind);
}
function fn(array, left, right, indexToFind) {
  const index = lpartition(array, left, right);

  if(index === indexToFind) {
    return array[index];
  } else if(indexToFind > index) {
    return fn(array, index+1, right, indexToFind);
  } else if(indexToFind < index) {
    return fn(array, left, index-1, indexToFind);
  }
}

function lpartition(array, left, right) {
  const pivot = array[right];

  let p = q = left;
  while(q < right) {
    if(array[q] < pivot) {
      swap(array, p, q);
      p++;
    }
    q++;
  }

  swap(array, p, q);
  return p;
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}
