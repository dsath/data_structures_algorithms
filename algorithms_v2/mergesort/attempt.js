const { test } = require("./test/test");

test(fn);
function fn(nums) {
  const result = mergesort(nums, 0, nums.length - 1);

  return result;
}

function mergesort(nums, left, right) {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergesort(nums, left, mid);
    mergesort(nums, mid + 1, right);
    merge(nums, left, right, mid);
  }
  return nums;
}

function merge(nums, left, right, mid) {
  let sortedNums = [];
  let p = left;
  let q = mid + 1;
  while (p <= mid && q <= right) {
    if (nums[p] < nums[q]) {
      sortedNums.push(nums[p]);
      p++;
    } else {
      sortedNums.push(nums[q]);
      q++;
    }
  }

  while (p <= mid) {
    sortedNums.push(nums[p]);
    p++;
  }

  while (q <= right) {
    sortedNums.push[nums[q]];
  }

  for (let i = left; i <= right; i++) {
    nums[i] = sortedNums[i - left];
  }
}
