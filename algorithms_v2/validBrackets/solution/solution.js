const {test} = require('../test/test.js');

function validBrackets(s) {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = [];
  for(let i = 0; i < s.length; i++) {
    let currentBracket = s[i];
    if(brackets[currentBracket]) {
      stack.push(currentBracket);
    } else {
      const leftBracket = stack.pop();
      const rightBracket = currentBracket;
      if(rightBracket !== brackets[leftBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

test(validBrackets);
