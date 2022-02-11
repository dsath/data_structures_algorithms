let test1 = "" // true
let test2 = "{([])}" // => true
let test3 = "{([]" // => false
let test4 = "{[(])}" // => false
let test5 = "{[]()}" // => true


function validBrackets(s) {
  let brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  let stack = [];
  for(let i = 0; i < s.length; i++) {
    let currentBracket = s[i];
    if(brackets[currentBracket]) {
      stack.push(currentBracket);
    } else {
      let leftBracket = stack.pop();
      let rightBracket = currentBracket;
      if(rightBracket !== brackets[leftBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validBrackets(test1));
console.log(validBrackets(test2));
console.log(validBrackets(test3));
console.log(validBrackets(test4));
console.log(validBrackets(test5));
