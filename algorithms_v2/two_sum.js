// test cases

let test1 = [1, 3, 7, 9, 2]; // t = 11 return [3, 4]
let test2 = [1, 3, 7, 9, 2]; // t = 25 return null
let test3 = [] // t = 1 return null
let test4 = [5]; // t = 5 return null
let test5 = [1, 6]; // t = 7 return [0, 1]

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

console.log(two_sum(test1, 11));
console.log(two_sum(test2, 25));
console.log(two_sum(test3, 1));
console.log(two_sum(test4, 5));
console.log(two_sum(test5, 7));

