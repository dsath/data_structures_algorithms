const { test } = require("./test/test");

test(fn);

function fn(root) {
  if (!root) return 0;
  let height = getHeight(root);

  const lastRowMax = Math.pow(2, height) - 1; // numerated from 0 to n-1
  let left = 0,
    right = lastRowMax;

  while (left < right) {
    const mid = Math.floor((left + right) / 2) + 1;
    if (checkIfExists(root, mid, lastRowMax)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return lastRowMax + left + 1; // innernodes + lastRow
}

function getHeight(root) {
  let currentNode = root;
  let count = 0;

  while (currentNode.left) {
    currentNode = currentNode.left;
    count++;
  }
  return count;
}

function checkIfExists(root, indexToCheck, upperNode) {
  let currentNode = root;
  let left = 0,
    right = upperNode;
  while (left < right) {
    const mid = Math.floor((left + right) / 2) + 1;
    if (indexToCheck >= mid) {
      left = mid;
      currentNode = currentNode.right;
    } else {
      right = mid - 1;
      currentNode = currentNode.left;
    }
  }

  return currentNode !== null;
}
