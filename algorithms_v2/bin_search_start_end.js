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
  return null;
}

function start_end_binsearch(array, left, right, numToFind) {
  while(true) {
    let index = binarySearch(array, left, right, numToFind);
  }
}

console.log(binarySearch(test, 0));
