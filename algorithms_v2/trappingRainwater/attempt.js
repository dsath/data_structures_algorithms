const { test } = require("./test/test");

test(fn);
function fn(nums) {
  let left = 0;
  let right = nums.length - 1;

  let maxLeft = nums[left];
  let maxRight = nums[right];

  let totalWater = 0;

  while (left < right) {
    if (nums[left] < nums[right]) {
      if (nums[left] < maxLeft) {
        totalWater += maxLeft - nums[left];
      } else {
        maxLeft = nums[left];
      }
      left++;
    } else {
      if (nums[right] < maxRight) {
        totalWater += maxRight - nums[right];
      } else {
        maxRight = nums[right];
      }
      right--;
    }
  }
  return totalWater;
}
