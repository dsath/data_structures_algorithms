//////////
// removeInvalidBrackets
// Given a string only containing round brackets '(' and ')' and lowercase characters, remove the least amount of brackets so the string is valid. 
// A string is considered valid if it is empty or it there are brackets, they all close.
//
//
//
//
//////////
const {test} = require('./test/test.js');
test(fn);

function fn(s) {
  let arrayedString = s.split("");
  const stack = [];

  for(let i = 0; i < arrayedString.length; i++) {
    if(arrayedString[i] === "(") {
      stack.push(i);
    } else if(arrayedString[i] === ")") {
      if(stack.length > 0) {
        stack.pop();
      } else {
        arrayedString[i] = "";
      }
    }
  }

  while(stack.length > 0) {
    const indexToRemove = stack.pop();
    arrayedString[indexToRemove] = "";
  }
  return arrayedString.join("");
}
