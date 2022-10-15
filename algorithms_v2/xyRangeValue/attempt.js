const { test } = require("./test/test");
test(fn);

function fn(array, target) {
  // find target
  let start = binarySearch(array, target, 0, array.length - 1);
  let x = start;
  let y = start;

  if (start === -1) {
    return [-1, -1];
  }

  // find right Edge index
  let tempY;
  while (y !== -1) {
    tempY = y;
    y = binarySearch(array, target, y + 1, array.length - 1);
  }
  y = tempY;

  let tempX;
  while (x !== -1) {
    tempX = x;
    x = binarySearch(array, target, 0, x - 1);
  }
  x = tempX;

  return [x, y];
}

function binarySearch(array, target, left, right) {
  while (left <= right) {
    const nextCheckIndex = Math.floor((left + right) / 2);
    const nextCheckValue = array[nextCheckIndex];
    if (target < nextCheckValue) {
      right = nextCheckIndex - 1;
    } else if (target > nextCheckValue) {
      left = nextCheckIndex + 1;
    } else {
      return nextCheckIndex;
    }
  }
  return -1;
}
