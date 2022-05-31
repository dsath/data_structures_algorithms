
// Typed Out Strings
// Given two strings S and T, return if they are equal when both are typed out. Any '#' that appears in the string counts as a backspace.

const {test} = require('./test/test.js');



function fn(s, t) {
  let sIndex = s.length - 1, tIndex = t.length - 1;

  while(sIndex >= 0 || tIndex >= 0) {
    sIndex = findNextCompare(s, sIndex);
    tIndex = findNextCompare(t, tIndex);

    if(s[sIndex] !== t[tIndex]) {
      return false;
    }
    sIndex--; tIndex--;

  }
  return true;
}

function findNextCompare(s, index) {
  let skip = 0;
  while(skip > 0 || s[index] === '#') {
    if(s[index] === '#') {
      skip++;
    } else {
      skip--;
    }
    index--;
  }
  return index;
}

test(fn);
