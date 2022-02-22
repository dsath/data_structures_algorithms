// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if(number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  //code here
  let answer = 1;
  while(number > 1) {
    answer *= number;
    number--;
  }
  return answer;
}

function tailFactorial(x, totalSoFar = 1) {
  if (x === 0) {
    return totalSoFar;
  } else {
    return tailFactorial(x - 1, totalSoFar * x);
  }
}

let recursiveResult = findFactorialRecursive(15);
console.log(recursiveResult);
let iterativeResult = findFactorialIterative(15);
console.log(iterativeResult);

