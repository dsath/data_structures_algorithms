const {test} = require('../test/test.js');

// start from outside
function isValidPalindrome1(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0; right = s.length - 1;

  while(left < right) {
    if(s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;

}

// start from middle.
function isValidPalindrome2(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const middle = Math.floor(s.length / 2);
  let right = middle;
  let left = (s.length % 2 === 0) ? middle - 1 : middle;

  while(right < s.length) {
    if(s[left] !== s[right]) return false;
    left--; right++;
  }
  return true;
}

// compare reversed string
function isValidPalindrome3(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversedString = "";
  for(let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }
  return reversedString === s;
}

test(isValidPalindrome1);
test(isValidPalindrome2);
test(isValidPalindrome3);
