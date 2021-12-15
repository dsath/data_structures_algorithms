const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let sortedIndex = 1; sortedIndex < array.length; sortedIndex++) {
    let rightCheck = sortedIndex;
    let leftCheck = sortedIndex - 1;
    
    while(leftCheck >= 0 && array[leftCheck] > array[rightCheck]) {
      let temp = array[leftCheck]
      array[leftCheck] = array[rightCheck];
      array[rightCheck] = temp;
      leftCheck--; rightCheck--;
    }
  }
}

insertionSort(numbers);
console.log(numbers);
