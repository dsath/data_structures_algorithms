const { test } = require("./test/test");
test(quickselect);

function quickselect(nums, kthLargest) {
  const indexToFind = nums.length - kthLargest;

  const valueAtIndex = find(nums, indexToFind, 0, nums.length - 1);
  return valueAtIndex;
}

function find(nums, indexToFind, left, right) {
  if (left <= right) {
    const currentIndex = lomutoPartition(nums, left, right);

    if (indexToFind > currentIndex) {
      return find(nums, indexToFind, currentIndex + 1, right);
    } else if (indexToFind < currentIndex) {
      return find(nums, indexToFind, left, currentIndex - 1);
    } else {
      return nums[currentIndex];
    }
  }
}

function lomutoPartition(nums, left, right) {
  const pivot = nums[right];

  // goes forward to check new values for swapping
  let p = left;
  // stays back to keep track of value that needs swapped
  let q = left;

  while (p < right) {
    if (nums[p] < pivot) {
      swap(nums, p, q);
      q++;
    }
    p++;
  }

  // final swap, swap q and the pivot
  swap(nums, q, right);

  return q;
}

function swap(nums, left, right) {
  const temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}
