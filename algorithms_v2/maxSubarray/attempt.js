const { test } = require("./test/test");

test(fn);
function fn(array) {
  return maxSubarray(array, 0, array.length - 1);
}

// recursive
function maxSubarray(array, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);

    const tuple1 = maxArrayFromMidpoint(array, left, right, mid);
    const tuple2 = maxSubarray(array, left, mid);
    const tuple3 = maxSubarray(array, mid + 1, right);

    if (tuple1[2] > tuple2[2]) {
      if (tuple1[2] > tuple3[2]) {
        return tuple1;
      } else {
        return tuple3;
      }
    } else {
      if (tuple2[2] > tuple3[2]) {
        return tuple2;
      } else {
        return tuple3;
      }
    }
  } else {
    return [left, right, array[left]];
  }
}

// find max array starting at midpoint
function maxArrayFromMidpoint(array, left, right, mid) {
  let p = mid;
  let q = mid + 1;

  let leftMaxSum = -Infinity;
  let leftCurrentSum = 0;
  let leftMaxIndex;

  while (p >= left) {
    leftCurrentSum += array[p];
    if (leftCurrentSum > leftMaxSum) {
      leftMaxSum = leftCurrentSum;
      leftMaxIndex = p;
    }
    p--;
  }

  let rightMaxSum = -Infinity;
  let rightMaxIndex;
  let rightCurrentSum = 0;

  while (q <= right) {
    rightCurrentSum += array[q];
    if (rightCurrentSum > rightMaxSum) {
      rightMaxSum = rightCurrentSum;
      rightMaxIndex = q;
    }
    q++;
  }

  return [leftMaxIndex, rightMaxIndex, leftMaxSum + rightMaxSum];
}
