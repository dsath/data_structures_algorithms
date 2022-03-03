let {BinarySearchTree} = require('../../bst.js');

let test1 = [50, 60, 55, 56, 54, 65, 64, 66, 40, 45, 35, 46, 44, 34, 36]; // => 15
let test2 = [50, 60, 55, 56, 54, 65, 40, 45, 35, 46, 44, 34, 36]; // => 13
let test3 = [50, 60, 55, 65, 40, 45, 35, 44, 34, 36]; // => 10
let test4 = [50, 60, 55, 65, 40, 45, 35, 34]; // => 8
let test5 = [];
let tree = new BinarySearchTree;

test5.forEach((item, index) => {
  tree.insert(item);
});

tree.print();


// function findCompleteNodes(root) {
//   let height = findHeight(root);
//   let right = Math.pow(2, height) - 1, left = 0;

//   let endingLeaf = findEndingLeaf(root, 0, right, 0, height);

//   let lastLevelNodes = endingLeaf + 1;
//   let restNodes = Math.pow(2, height) - 1;
//   return lastLevelNodes + restNodes;
// }

// function findEndingLeaf(node, left, right, currentHeight, maxHeight) {
//   let middle = Math.floor((left+right)/2);
//   if(left < right) {
//     let rightCheck = findHeight(node.right, currentHeight+1);
//     if(rightCheck === maxHeight) {
//       return findEndingLeaf(node.right, middle+1, right, currentHeight+1, maxHeight);
//     } else {
//       return findEndingLeaf(node.left, left, middle, currentHeight+1, maxHeight);
//     }
//   } else {
//     return left;
//   }
// }

function findHeight(node, height = 0) {
  if(node) {
    if(node.left) {
      return findHeight(node.left, height+1);
    }
    return height;
  } else {
    return null;
  }
}

function findCompleteNodes(root) {
  if(!root) return 0;

  let height = findHeight(root);

  if(height === 0) return 1;

  let upperNode = Math.pow(2, height) - 1;

  let left = 0;
  let right = upperNode;

  while(left < right) {
    let idxToFind = Math.ceil((right+left)/2);
    if(checkIfExists(root, height, idxToFind)){
      left = idxToFind;
    } else {
      right = idxToFind-1;
    }
  }

  let lastLevel = left+1;
  let rest = Math.pow(2, height) - 1;
  return lastLevel + rest;
}

function checkIfExists(node, height, idxToFind) {
  let left = 0, right = Math.pow(2, height) - 1;
  for(let i = 0; i < height; i++) {
    const mid = Math.ceil((left+right)/2);
    if(idxToFind >= mid) {
      node = node.right;
      left = mid;
    } else {
      node = node.left;
      right = mid - 1;
    }
  }

  return node !== null;
  
}

console.log(findCompleteNodes(tree.root));


