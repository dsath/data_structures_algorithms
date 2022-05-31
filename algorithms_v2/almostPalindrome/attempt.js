const {test} = require('./test/test.js');



function fn(s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "");
  let l = 0, r = s.length-1;

  while(l < r) {
    if(s[l] !== s[r]) {
      return fn2(s, l+1, r) || fn2(s, l, r-1);
    }
    l++; r--;
  }
  return true;
}

function fn2(s, l, r) {

  while(l < r) {
    if(s[l] !== s[r]) {
      return false;

    }
    l++; r--;
  }
  return true;
}

test(fn);
