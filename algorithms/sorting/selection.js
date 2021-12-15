const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  let sortedIndex = 0;
  for (let i = 0; i < array.length; i++) {
    let smallest = sortedIndex;
    for (let i = sortedIndex; i < array.length; i++) {
      if (array[i] < array[smallest]) {
        smallest = i;
      }
    }
    let temp = array[smallest];
    array[smallest] = array[sortedIndex];
    array[sortedIndex] = temp;
    sortedIndex++;
  }
}

selectionSort(numbers);
console.log(numbers);


//function selectionSort(array) {
//  const length = array.length;
//  for(let i = 0; i < length; i++){
//    // set current index as minimum
//    let min = i;
//    let temp = array[i];
//    for(let j = i+1; j < length; j++){
//      if (array[j] < array[min]){
//        //update minimum if current is lower that what we had previously
//        min = j;
//      }
//    }
//    array[i] = array[min];
//    array[min] = temp;
//  }
//  return array;
//}
