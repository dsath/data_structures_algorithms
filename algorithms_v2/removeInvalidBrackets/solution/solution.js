const {test} = require('../test/test.js');

function minimumBracketsRemoved(s) {
  let arrayedString = s.split('');
  let stack = [];

  for(let i = 0; i < arrayedString.length; i++) {
    let currentChar = arrayedString[i];

    if(currentChar === '(') {
      stack.push(i);
    } else if(currentChar === ')' && stack.length) {
      stack.pop();
    } else if(currentChar === ')') {
        arrayedString[i] = '';
    }
  }

  while(stack.length > 0) {
    let indexToRemove = stack.pop();
    arrayedString[indexToRemove] = '';
  }

  return arrayedString.join('');
}

test(minimumBracketsRemoved);
