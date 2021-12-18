let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [44, 1, 6, 2, 99, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
  let pivot = left;
  if(right < left) {
    return;
  }

  pivot = sortPivot(array, left, right, pivot);
  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

// Takes a pivot index and sorts it. all larger numbers are placed to the right of the pivot
// and all smaller numbers to the left.
function sortPivot(array, left, right, pivot) {
  let rightCheckIndex = right;
  let leftCheckIndex = left;
  let temp;

  while(1) {
    if(rightCheckIndex === pivot) {
      break;
    }
    while(array[rightCheckIndex] > array[pivot]) {
      rightCheckIndex--;
    }
    if(rightCheckIndex !== pivot) {
      swap(array, pivot, rightCheckIndex);
      pivot = rightCheckIndex;
      // We know the swapped value is less so we don't need to check it again when we check the left side.
      leftCheckIndex++;
    } 
    if(leftCheckIndex === pivot) {
      break;
    }
    while(array[leftCheckIndex] < array[pivot]) {
      leftCheckIndex++;
    }
    if(leftCheckIndex !== pivot) {
      swap(array, pivot, leftCheckIndex);
      pivot = leftCheckIndex;
      // We know the swapped value is larger so we don't need to check it again when we check the right side.
      rightCheckIndex--;
    }
  }
  return pivot;
}

function swap(array, firstIndex, secondIndex) {
    temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
