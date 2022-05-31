//////////
//  Given a string containing only brackets (, [, {. Determine if it is valid. The string is valid if all bracketes close.
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn);

const brackets = {
  '(': ')',
  '{': '}',
  '[': ']'
}
function fn(s) {

  const stack = [];
  for(let i = 0; i < s.length; i++) {
    const currentBracket = s[i];
    if(brackets[currentBracket]) {
      const leftBracket = currentBracket;
      stack.push(leftBracket);
    } else {
      const rightBracket = currentBracket;
      const leftBracket = stack.pop();
      if(brackets[leftBracket] !== rightBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
