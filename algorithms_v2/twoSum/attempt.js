const { test } = require("./test/test");

test(fn);

function fn(array, target) {
  let myHash = {};

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (myHash[currentNum] !== undefined) {
      return [myHash[currentNum], i];
    } else {
      myHash[target - currentNum] = i;
    }
  }
  return null;
}
