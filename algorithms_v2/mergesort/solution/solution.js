const {test} = require('../test/test.js');

function outer(array) {
  const left = 0, right = array.length-1;
  mergesort(array, left, right);
  return array;
}

function mergesort(nums, left, right) {
  if(left < right) {
    let middle = Math.floor((left+right)/2);
    mergesort(nums, left, middle);
    mergesort(nums, middle+1, right);
    merge(nums, left, right, middle);
  }
  return nums;
}

function merge(array, left, right, middle) {
  let merged = [];

  let p1 = left, p2 = middle+1;

  while(p1 <= middle && p2 <= right) {
    if(array[p1] < array[p2]) {
      merged.push(array[p1]);
      p1++;
    } else {
      merged.push(array[p2]);
      p2++;
    }
  }

  while(p1 <= middle) {
    merged.push(array[p1]);
    p1++;
  }

  while(p2 <= right) {
    merged.push(array[p2]);
    p2++;
  }

  for(let i = right; i >= left; i--) {
    array[i] = merged.pop();
  }
  return;
}

test(outer);
