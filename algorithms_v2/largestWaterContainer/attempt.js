// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold. come up with solution in code.



const {test} = require('./test/test.js');


function fn(array) {

  let left = 0, right = array.length - 1;
  let maxWater = 0;

  while(left < right) {
    const currentWater = (right - left) * Math.min(array[left], array[right]);
    maxWater = Math.max(currentWater, maxWater);
    if(array[left] < array[right]) {
      left++;
    } else {
      right--;
    }

  }
  return maxWater;

}

test(fn);
