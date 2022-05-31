let {test} = require('../test/test.js');

// function max_water_container(heights) {
//   let maxArea = 0;
//   for (let p1 = 0; p1 < heights.length; p1++) {
//     for(let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// }

function maxArea(array) {
  let left = 0, right = array.length - 1;
  let max_area = 0;
  while(left < right) {
    const leftWallHght = array[left], rightWallHght = array[right];
    const smallerWallHeight = Math.min(leftWallHght, rightWallHght);
    const width = right - left;
    const currentArea = smallerWallHeight * width;
    max_area = Math.max(currentArea, max_area);
    if(leftWallHght < rightWallHght) {
      left++;
    } else {
      right--;
    }
  }
    return max_area;
}

test(maxArea);
