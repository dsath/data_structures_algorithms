let {test} = require('../test/test.js');

// brute force
// function two_sum(nums, target) {
//   for (let p1 = 0; p1 < nums.length; p1++) {
//     let numberToFind = target - nums[p1];
//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       if(numberToFind === nums[p2]) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// }

// optimized using hash maps
function two_sum(nums, target) {
  let numbersToFind = [];
  for (let p1 = 0; p1 < nums.length; p1++) {
    const currentMapVal = numbersToFind[nums[p1]];
    if (currentMapVal >= 0) {
      return [currentMapVal, p1]
    } else {
      const numberToFind = target - nums[p1];
      numbersToFind[numberToFind] = p1;
    }
  }
  return null;
}

test(two_sum);
