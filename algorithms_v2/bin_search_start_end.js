let test1 = [1,2,2,5,5,5,8,9]; // (5) => [3, 5]
let test2 = [1,2,3,4,5,6] // (4) => [3,3]
let test3 = [1,2,3,4,5] // (9) => [-1,-1]

function findRange(array, numToFind) {
  let firstPos, startPos, endPos;
  firstPos = startPos = endPos = binarySearch(array, 0, array.length-1, numToFind);
  let temp1, temp2;

  if(firstPos === -1) return [-1, -1];

  while(startPos !== -1) {
    temp1 = startPos;
    startPos = binarySearch(array, 0, startPos-1, numToFind);
  }
  startPos = temp1;

  while(endPos !== -1) {
    temp2 = endPos;
    endPos = binarySearch(array, endPos+1, array.length-1, numToFind);
  }
  endPos = temp2;

  return [startPos, endPos];
}

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
  return -1;
}
console.log(findRange(test1, 5));
