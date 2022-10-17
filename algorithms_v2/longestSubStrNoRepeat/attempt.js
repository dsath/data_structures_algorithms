const { test } = require("./test/test");

test(fn);
function fn(s) {
  let charactersSeen = {};
  let max = 0;
  let p = 0;
  let q = 0;

  while (q < s.length) {
    const currentChar = s[q];
    const currentCharPrevIndex = charactersSeen[currentChar];
    if (p <= currentCharPrevIndex && charactersSeen[currentChar] >= 0) {
      p = charactersSeen[currentChar] + 1;
    }
    charactersSeen[currentChar] = q;
    max = Math.max(q - p + 1, max);
    q++;
  }
  return max;
}
