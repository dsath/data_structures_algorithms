const {test} = require('../test/test.js');

function outer(array) {
  const left = 0, right = array.length - 1;
  const result = max_subarray(array, left, right);
  return result;
}

function max_subarray(array, left, right) {
  if(array.length === 0) return null;
  if(left < right) {
    let middle = Math.floor((left + right)/2);
    let crossMax, leftMax, rightMax;

    crossMax = cross_array(array, left, right, middle);
    leftMax = max_subarray(array, left, middle);
    rightMax = max_subarray(array, middle + 1, right);

    if(crossMax[2] > leftMax[2] && crossMax[2] > rightMax[2]) {
      return crossMax;
    } else if(leftMax[2] > rightMax[2]) {
      return leftMax;
    } else {
      return rightMax;
    }
  }

  return [left, right, array[left]];
}

function cross_array(array, left, right, middle) {
  let currentSum;

  let l = middle;
  let leftMaxIndex, leftMaxSum = -Infinity;
  currentSum = 0;
  while(l >= left) {
    currentSum += array[l];

    if(currentSum > leftMaxSum) {
      leftMaxSum = currentSum;
      leftMaxIndex = l;
    }
    l--
  }


  let r = middle + 1;
  let rightMaxIndex, rightMaxSum = -Infinity;
  currentSum = 0;
  while(r <= right) {
    currentSum += array[r];

    if(currentSum > rightMaxSum) {
      rightMaxSum = currentSum;
      rightMaxIndex = r;
    }
    r++
  }

  return [leftMaxIndex, rightMaxIndex, leftMaxSum + rightMaxSum];
}

test(outer);
