//////////
// Given a string, determine if it is almost a palindrome (you can remove at most one character)
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(s) {
  let left = 0, right = s.length - 1;

  while(left < right) {
    if(s[left] !== s[right]) {
      return isPalindrome(s, left+1, right) || isPalindrome(s, left, right-1);
    }
    left++; right--;
  }
  return true;

};

function isPalindrome(s, left, right) {
  while(left < right) {
    if(s[left] !== s[right]) {
      return false;
    }
    left++; right--;
  }
  return true;
}
