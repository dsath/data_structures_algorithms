let test1 = [[5,3,1,6,4,2],2]; // => 5
let test2 = [[2,3,1,2,4,2],4]; // => 2
let test3 = [[3], 1]; // => 3




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


console.log(find_kth_largest(test1[0], test1[1]));
console.log(test1[0]);

console.log(find_kth_largest(test2[0], test2[1]));
console.log(test2[0]);

console.log(find_kth_largest(test3[0], test3[1]));
console.log(test3[0]);

