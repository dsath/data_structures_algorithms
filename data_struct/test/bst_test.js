let {BinarySearchTree} = require('../bst.js');

function createRandomBST(numNodes, max, duplicates) {
  let tree = new BinarySearchTree;
  let dupCheck = {};
  if(duplicates) {
    for(let i = 0; i < numNodes; i++) {
      let rand = Math.floor(Math.random() * max) + 1
      tree.insert(rand);
    }
  } else {
    // must have a range of unique values that can fill numNodes
    if(max < numNodes) {
      return null;
    }
    for(let i = 0; i < numNodes; i++) {
      while(true) {
        let rand = Math.floor(Math.random() * max) + 1
        if(!dupCheck[rand]) {
          tree.insert(rand);
          dupCheck[rand] = true;
          break;
        }
      }
    }
  }
  return tree;
}

module.exports.createRandomBST = createRandomBST;

