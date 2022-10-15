const { test } = require("./test/test");
test(fn);

function fn(s) {
  let arrayedString = s.split("");
  let stack = [];

  for (let i = 0; i < arrayedString.length; i++) {
    if (arrayedString[i] === "(") {
      stack.push(i);
    } else if (arrayedString[i] === ")") {
      if (stack.length > 0) {
        stack.pop();
      } else {
        arrayedString[i] === "";
      }
    }
  }

  while (stack.length > 0) {
    let indexToRemove = stack.pop();
    arrayedString[indexToRemove] = "";
  }

  return arrayedString.join("");
}
