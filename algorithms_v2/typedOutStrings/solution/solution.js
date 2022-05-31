let {test} = require('../test/test.js')

function typedOutStrings(s, t) {
  let p1 = s.length - 1; p2 = t.length - 1;

  while(p1 >= 0 || p2 >= 0) {
    p1 = findNextCompare(s, p1);
    p2 = findNextCompare(t, p2);
    if(s[p1] !== t[p2]) {
      return false;
    }
    p1--; p2--;
  }
  return true;
}

function findNextCompare(s, p) {
  let skip = 0;

  while(skip > 0 || s[p] === '#') {
    if(s[p] === '#') {
      skip++;
    } else {
      skip--;
    }
    p--;
  }
  return (p >= 0) ? p : undefined;
}
test(typedOutStrings);
