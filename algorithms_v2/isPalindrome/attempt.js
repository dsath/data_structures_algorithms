const { test } = require("./test/test");

test(fn1);
test(fn2);
test(fn3);

// Make a new string by adding chars to a new array backwards of the original string to create the palindrome
function fn1(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversedS = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedS += s[i];
  }

  return s === reversedS;
}

// compare chars out to in to check Palindrome
function fn2(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let p = 0;
  let q = s.length - 1;
  while (p < q) {
    if (s[p] !== s[q]) {
      return false;
    }
    p++;
    q--;
  }

  return true;
}

// compare chars in to out to check Palindrome
function fn3(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let mid = Math.floor((s.length - 1) / 2);
  let p = mid;
  let q = s.length % 2 === 0 ? mid + 1 : mid;

  while (p >= 0) {
    if (s[p] !== s[q]) {
      return false;
    }
    p--;
    q++;
  }
  return true;
}
