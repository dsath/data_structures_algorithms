//////////
// mergesort
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(nums) {
  // console.log("before", nums);
  return fn_inner(nums, 0, nums.length-1);
  // console.log("after", nums);
};

function fn_inner(nums, left, right) {
  if (left < right) {
    const mid = Math.floor((left+right)/2);
    fn_inner(nums, left, mid);
    fn_inner(nums, mid+1, right);
    merge(nums, left, right, mid);
  }
  return nums;
}

function merge(nums, left, right, mid) {
  const temp = [];
  let l = left;
  let r = mid+1;

  while(l <= mid && r <= right) {
    if(nums[l] < nums[r]) {
      temp.push(nums[l]);
      l++;
    } else {
      temp.push(nums[r]);
      r++;
    }
  }

  while(l <= mid) {
    temp.push(nums[l]);
    l++;
  }

  while(r <= right) {
    temp.push(nums[r]);
    r++;
  }
  nums.splice(left, right-left+1, ...temp);
}
