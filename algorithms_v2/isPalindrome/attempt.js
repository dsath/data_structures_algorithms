//////////
// Given a string, determine if it is a palindrome. list 3 solutions
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn)

// Matches reversed string
function fn(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

  return s === s.split("").reverse().join("");
};

// Matches character going out to in

function fn(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

  let p = 0, q = s.length -1;

  while(p < q) {
    if(s[p] !== s[q]) {
      return false;
    }
    p++;q--;
  }
  return true;
}

// Matches character going in to out
function fn(s) {
  s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let mid = (s.length - 1)/2
  let p = mid;
  let q = (s.length%2) ? mid : mid+1;

  while(p >= 0) {
    if(s[p] !== s[q]) {
      return false;
    }
    p--; q++;
  }
  return true;
}
