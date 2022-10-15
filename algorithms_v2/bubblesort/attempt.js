//////////
// 
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(nums) {

  for (let i = 0; i < nums.length - 1; i++) {
    for(let j = 0; j < nums.length - 1 - i; j++) {
      if(nums[j] > nums[j+1]) {
        swap(nums, j, j+1);
      }
    }
  }
  return nums;

};

function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}
