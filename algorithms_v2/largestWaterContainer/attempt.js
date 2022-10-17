const { test } = require("./test/test");

test(fn);

// area = width * height

function fn(nums) {
  let p = 0;
  let q = nums.length - 1;
  let maxArea = 0;

  while (p < q) {
    // calculate area and update max Area
    const currentArea = (q - p) * Math.min(nums[q], nums[p]);
    maxArea = Math.max(currentArea, maxArea);

    // move smaller of two walls inward
    if (nums[p] < nums[q]) {
      p++;
    } else {
      q--;
    }
  }

  return maxArea;
}
