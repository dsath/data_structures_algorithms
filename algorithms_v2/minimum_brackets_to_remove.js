let test1 = "a)bc(d)"; // => "abc(d)"
let test2 = "(ab(c)d"; // => "ab(c)d" or "(abc)d"
let test3 = "))(("; // => ""

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

console.log(minimumBracketsRemoved(test1));
console.log(minimumBracketsRemoved(test2));
console.log(minimumBracketsRemoved(test3));
