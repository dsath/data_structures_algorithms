// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciMaster() {
  let cache = {};

  return function fib(n) {
    if(n < 2) {
      return n;
    } else {
      if(n in cache) {
        return cache[n];
      } else {
          cache[n] = fib(n - 1) + fib(n - 2);
          return cache[n];
      }
    }
  }
}

let recursive = fibonacciMaster()
let result = recursive(6);
console.log(result);
