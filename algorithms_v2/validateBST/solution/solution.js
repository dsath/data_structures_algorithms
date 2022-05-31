let {test} = require('../test/test.js');
function validate(node, min, max) {
  if(node) {
    let leftNodeValid = validate(node.left, min, node.value)
    let rightNodeValid = validate(node.right, node.value, max)
    return node.value > min && node.value < max && leftNodeValid && rightNodeValid;
  } else {
    return true
  }
}

test(validate);
