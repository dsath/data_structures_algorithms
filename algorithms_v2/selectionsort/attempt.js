const { test } = require("./test/test");

test(fn);
function fn(nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minInd = i;
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[y] < min) {
        min = nums[y];
        minInd = y;
      }
    }
    swap(nums, minInd, i);
  }
  return nums;
}

function swap(nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}
