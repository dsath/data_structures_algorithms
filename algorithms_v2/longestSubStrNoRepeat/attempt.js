//////////
// Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

function fn(s) {
  const seen = {};
  let maxLength = 0;


  let p = q = 0;

  while(q < s.length) {
    const current = s[q];
    const previousIndex = seen[current];
    //there's a duplicate
    if(previousIndex >= 0 &&  previousIndex >= p) {
      p = previousIndex + 1;
    }
    maxLength = Math.max(q-p+1, maxLength);
    seen[current] = q;
    q++;
  }

  return maxLength;
};
