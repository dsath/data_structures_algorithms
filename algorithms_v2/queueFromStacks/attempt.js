//////////
// queueFromStacks
// Implement the class Queue using stacks. The queue methods you need to implement are enqueue, dequeue, peek, and empty.
//
//
//
//
//////////
const {test} = require('./test/test.js');
test();

class MyQueue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x) {
    this.in.push(x);
  }

  pop() {
    if(this.out.length === 0) {
      this._shiftInToOut();
    }
    return this.out.pop();
  }

  peek() {
    if(this.out.length === 0) {
      this._shiftInToOut();
    }
    return this.out[this.out.length-1];
  } 
  
  empty() {
    return this.out.length === 0 && this.in.length === 0;
  }

  _shiftInToOut() {
    while(this.in.length > 0) {
      this.out.push(this.in.pop());
    }
  }
}


