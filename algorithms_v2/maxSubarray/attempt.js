// Given an array, find a subarray inside that array that, when added together, holds the largest possible value. Or, in other words, find the maximum subarray inside the array. (recursive approach)

// return a 3-tuple where (left-index, right-index, sum).
const{test} = require('./test/test.js');




function outer(array) {
  const right = array.length - 1;
  const left = 0;

  return fn(array, left, right);
}

function fn(array, left, right) {

  if(right > left) {
    const mid = Math.floor((left + right) / 2);
    const leftMax = fn(array, left, mid);
    const rightMax = fn(array, mid+1, right);
    const currentMax = cross(array, left, right, mid);

    if(currentMax[2] > leftMax[2] && currentMax[2] > rightMax[2]) {
      return currentMax;
    } else if(leftMax[2] > rightMax[2]) {
      return leftMax;
    } else {
      return rightMax;
    }
  }

  // if array is of length 1, return that single value
  return [left, right, array[left]];
}


function cross(array, left, right, mid) {
  let lMaxSum = -Infinity; 
  let lMaxPointer = null;
  let lPointer = mid;

  let currentSum = 0;
  while(lPointer >= left) {
    currentSum += array[lPointer];
    if(currentSum > lMaxSum) {
      lMaxSum = currentSum;
      lMaxPointer = lPointer;
    }
    lPointer--;
  }

  let rMaxSum = -Infinity;
  let rMaxPointer = null;
  let rPointer = mid+1;
  currentSum = 0;
  while(rPointer <= right) {
    currentSum += array[rPointer];
    if(currentSum > rMaxSum) {
      rMaxSum = currentSum;
      rMaxPointer = rPointer;
    }
    rPointer++;
  }

  return [lMaxPointer, rMaxPointer, lMaxSum + rMaxSum];


}

test(outer);

