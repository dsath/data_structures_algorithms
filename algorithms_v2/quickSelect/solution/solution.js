const {test} = require('../test/test.js');
test(find_kth_largest);

function find_kth_largest(array,  kth) {
  let indexToFind = array.length - kth;
  return quickSelect(array, 0, array.length - 1, indexToFind);
}
function quickSelect(array, left, right, indexToFind) {
  let index = partition(array, left, right);

  if(index === indexToFind) {
    return array[index];
  } else if(indexToFind < index) {
    return quickSelect(array, left, index - 1, indexToFind);
  } else if(indexToFind > index) {
    return quickSelect(array, index + 1, right, indexToFind);
  }
}
// Lomotos
function partition(array, left, right) {
  let pivot = array[right];

  let i, j;
  i = j = left;

  while(j < right) {
    if(array[j] < pivot) {
      swap(array, i, j);
      i++
    }
    j++
  }

  swap(array, i, j);
  return i;
}
function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y];
  array[y] = temp;
}

