const {test} = require('./test/test.js');

function outer(array) {
  const left = 0;
  const right = array.length - 1;
  return fn(array, left, right);
}

function fn(array, left, right) {
  if(left < right) {
    const index = hoares(array, left, right);
    fn(array, left, index);
    fn(array, index+1, right);
  }
  return array;
}

function hoares(array, left, right) {
  const pivot = array[left];

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
  array[i] = array[y]
  array[y] = temp
}

test(outer);
