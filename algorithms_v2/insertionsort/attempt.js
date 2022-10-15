//////////
// 
//
// insetion sort
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(nums) {

  for (let i = 1; i < nums.length; i++) {
    let y = i;
    while(y > 0 && nums[y] < nums[y-1]) {
      swap(nums, y, y-1);
      y--
    }
  }
  return nums;

};
function swap(array, i, y) {
  let temp = array[i];
  array[i] = array[y]
  array[y] = temp
}

