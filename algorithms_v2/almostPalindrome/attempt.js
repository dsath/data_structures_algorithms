//////////
// Given a string, determine if it is almost a palindrome (you can remove at most one character)
//
//
//
//
//////////

function fn(s) {
  let q = 0;
  let p = s.length - 1;

  while (q < p) {
    if (s[q] !== s[p]) {
      return fn2(s, q + 1, p) || fn2(s, q, p - 1);
    }
    q++;
    p--;
  }

  return true;
}

function fn2(s, q, p) {
  while (q < p) {
    if (s[q] !== s[p]) {
      return false;
    }
    q++;
    p--;
  }
  return true;
}
