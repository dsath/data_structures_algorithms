const { test } = require("./test/test");

test(fn_outer);

function fn_outer(nums) {
  fn(nums, 0, nums.length - 1);
  return nums;
}

function fn(nums, left, right) {
  if (left < right) {
    const index = hoaresPartition(nums, left, right);

    fn(nums, left, index);
    fn(nums, index + 1, right);
  }
}

function hoaresPartition(array, left, right) {
  const pivot = array[left];
  // needs array, left index, right index

  while (true) {
    //move left index until you find a value smaller than pivot

    while (array[left] < pivot) {
      left++;
    }

    while (array[right] > pivot) {
      right--;
    }

    if (left >= right) {
      return right;
    }
    swap(array, left, right);
    left++;
    right--;
  }
}

function swap(nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}
