const {test} = require('../test/test.js');

function fn(s) {
  if(s.length <= 1) return s.length;
  let seenMap = {};
  let longest = 0, l = 0;
  for(let r = 0; r < s.length; r++) {
    let currentChar = s[r];
    let previousCharIndex = seenMap[currentChar];

    // if current character has already been seen and its twin is not to the left of the l pointer,
    // move l pointer to right of twin
    if(previousCharIndex >= l) {
      l = previousCharIndex + 1;
    }
    seenMap[currentChar] = r;
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
}

test(fn);
