const { test } = require("./test/test");
test(fn);

const brackets = {
  "[": "]",
  "{": "}",
  "(": ")",
};

function fn(s) {
  const stack = [];

  for (let index = 0; index < s.length; index++) {
    const element = s[index];

    if (brackets[element]) {
      stack.push(element);
    } else {
      const rightBracket = element;
      const leftBracket = s.pop();
      if (rightBracket !== brackets[leftBracket]) return false;
    }
  }

  return stack.length === 0;
}
