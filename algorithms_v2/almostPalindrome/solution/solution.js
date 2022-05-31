const {test} = require('../test/test.js');

function isAlmostPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0; right = s.length - 1;
  while(left < right) {
    if(s[left] !== s[right]) {
      return isValidPalindrome(s, left + 1, right) || isValidPalindrome(s, left, right - 1);
    }
    left++; right--;
  }
  return true;
}

function isValidPalindrome(s, left, right) {
  while(left < right) {
    if(s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;
}

test(isAlmostPalindrome);
