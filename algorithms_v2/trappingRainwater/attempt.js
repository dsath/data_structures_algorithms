// Trapping Rainwater
// Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped.
const {test} = require('./test/test.js');

function fn(heights) {

  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0, rightMax = 0;
  let totalRainwater = 0;
  while(left < right) {
    if(heights[left] < heights[right]) {
      if(heights[left] < leftMax) {
        totalRainwater += leftMax - heights[left];
      } else {
        leftMax = heights[left];
      }
      left++;
    } else {
      if(heights[right] < rightMax) {
        totalRainwater += rightMax - heights[right];
      } else {
        rightMax = heights[right];
      }
      right--;
    }
  }
  return totalRainwater;
}

test(fn);



