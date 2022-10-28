const { test } = require("./test/test");

function fn(nums) {
  const result = mergesort(nums, 0, nums.length - 1);

  return result;
}

function mergesort() {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    mergesort(nums, left, mid);
    mergesort(nums, mid + 1, right);
    merge(nums, left, right, mid);
  }
  return;
}

function merge(nums, left, right, mid) {}
