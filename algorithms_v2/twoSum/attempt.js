// Given an array of integers, return the indices of the two numbers that add up to a given target? If none exist, return null.
const {test} = require('./test/test.js');


function fn(array, target) {
  const needToFind = {};

  for(let i = 0; i < array.length; i++) {
    const currentNum = array[i];
    const firstIndex = needToFind[currentNum];

    if(firstIndex >= 0) {
      return [firstIndex, i];
    } else {
      needToFind[target - currentNum] = i;
    }
  }

  return null;
}
test(fn);
