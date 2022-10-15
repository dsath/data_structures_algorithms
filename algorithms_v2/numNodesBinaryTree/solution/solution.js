const { test } = require("../test/test.js");
test(findCompleteNodes);

function countNodes(root) {
  if (!root) return 0;

  let height = getHeight(root);

  let upperNode = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperNode;

  while (left < right) {
    let idxToFind = Math.ceil((right + left) / 2);
    if (checkIfExists(root, height, idxToFind)) {
      left = idxToFind;
    } else {
      right = idxToFind - 1;
    }
  }

  let lastLevel = left + 1;
  let rest = Math.pow(2, height) - 1;
  return lastLevel + rest;
}

function checkIfExists(node, height, idxToFind) {
  let left = 0,
    right = Math.pow(2, height) - 1;
  for (let i = 0; i < height; i++) {
    const mid = Math.ceil((left + right) / 2);
    if (idxToFind >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }
  }

  return node !== null;
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
