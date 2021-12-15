const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//my solutionc
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let n = 1;
    while(n < array.length) {
      if(array[n] < array[n - 1]) {
        let temp = array[n];
        array[n] = array[n - 1];
        array[n - 1] = temp;
      }
      n++;
    }
  }
}

bubbleSort(numbers);
console.log(numbers);


//instructor solution
//function bubbleSort(array) {
//  const length = array.length;
//  for (let i = 0; i < length; i++) {
//    for (let j = 0; j < length; j++) {
//      if(array[j] > array[j+1]) {
//        //Swap the numbers
//        let temp = array[j]
//        array[j] = array[j+1];
//        array[j+1] = temp;
//      }
//    }
//  }
//}
