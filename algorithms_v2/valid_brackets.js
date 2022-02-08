let test1 = "" // true
let test2 = "{([])}" // => true
let test3 = "{([]" // => false
let test4 = "{[(])}" // => false
let test5 = "{[]()}" // => true


function validBrackets(s) {
  let leftBrackets = "{[(";
  let stack = [];

  for(let i = 0; i < s.length; i++) {
    if(leftBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      let leftBracket = stack.pop();
      let rightBracket = s[i];
      switch(leftBracket) {
        case '{': 
          if(rightBracket !== '}') {
            return false;
          }
          break;
        case '(':
          if(rightBracket !== ')') {
            return false;
          }
          break;
        case '[':
          if(rightBracket !== ']') {
            return false;
          }
          break;
        default:
          return false
          break;
      }
    }
  }
  if(stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(validBrackets(test1));
console.log(validBrackets(test2));
console.log(validBrackets(test3));
console.log(validBrackets(test4));
console.log(validBrackets(test5));
