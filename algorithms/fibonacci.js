// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n){
  let first = 1;
  let second = 1;
  let temp;

  if(n === 0) {
    return 0;
  }
  if(n === 1 || n === 2) {
    return 1;
  }

  for(let i = 3; i <= n; i++) {
    temp = second;
    second = first;
    first = first + temp;
  }

  return first;
}
// let iterative = fibonacciIterative(15);
// console.log(iterative);

function fibonacciRecursive(n) {
  if(n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  
}

let recursive = fibonacciRecursive(50)
console.log(recursive);
