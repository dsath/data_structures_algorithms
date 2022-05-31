const {test} = require('../test/test.js');
function sort_outer(array) {
  quicksort(array, 0, array.length - 1);

  return array;
}
function quicksort(array, left, right) {
  if(left < right) {
    let index = partition(array, left, right);

    quicksort(array, left, index);
    quicksort(array, index + 1, right);
  }
}

function partition(array, left, right) {
  let pivot = array[left];

  while(true) {
    while(array[left] < pivot) {
      left++;
    }
    while(array[right] > pivot) {
      right--;
    }
    if(left >= right) {
      return right;
    }
    swap(array, left, right);
    left++; right--;
  }
}

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y];
  array[y] = temp;
}
test(sort_outer);
