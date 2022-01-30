let test_1 = [0,1,0,2,1,0,3,1,0,1,2]; // => 8
let test_2 = []; // => 0
let test_3 = [3]; // => 0
let test_4 = [3,4,3]; // => 0

function getTrappedRainwater_brute(heights) {
  let totalWater = 0;
  for(let i = 0; i < heights.length; i++) {
    let maxLeft = 0, maxRight = 0, leftP = i, rightP = i;

    while(leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }
    while(rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }
    totalWater += Math.min(maxLeft, maxRight) - heights[i];
  }
  return totalWater;
}


// Double Pointer strategy
function getTrappedRainwater_opt(heights) {
  let p1 = 0, p2 = heights.length - 1;
  let maxLeft = 0, maxRight = 0;
  let totalWater = 0;

  while(p1 < p2) {
    if(heights[p1] <= heights[p2]) {
      if(maxLeft > heights[p1]) {
        totalWater += maxLeft - heights[p1];
      } else {
        maxLeft = heights[p1];
      }
      p1++;
    } else {
      if(maxRight > heights[p2]) {
        totalWater += maxRight - heights[p2];
      } else {
        maxRight = heights[p2];
      }
      p2--;
    }
  }
  return totalWater;
}

// |
// |
// |
// |                  |\|
// |         |\|######|\|#########|\|
// |   |\|###|\||\|###|\||\|###|\||\|

console.log(getTrappedRainwater_opt(test_1));
console.log(getTrappedRainwater_opt(test_2));
console.log(getTrappedRainwater_opt(test_3));
console.log(getTrappedRainwater_opt(test_4));
