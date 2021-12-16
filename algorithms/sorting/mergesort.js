const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left

  const left = array.slice(0, array.length/2);
  const right = array.slice(array.length/2);

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  let mergedArray = [];
  let li = 0;
  let ri = 0;
  while(li < left.length && ri < right.length) {
    if(left[li] < right[ri]) {
      mergedArray.push(left[li]);
      li++;
    } else {
      mergedArray.push(right[ri]);
      ri++;
    }
  }

  if(li < left.length) {
    mergedArray = mergedArray.concat(left.slice(li));
  }
  if(ri < right.length) {
    mergedArray = mergedArray.concat(right.slice(ri));
  }

  return mergedArray;
}


const answer = mergeSort(numbers);
console.log(answer);



