const {test} = require('../test/test.js');

class Queue {
  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x) {
    this.in.push(x);
  }

  pop() {
    if(this.out.length === 0) {
      this._emptyIn();
    }

    return this.out.pop();
  }

  peek() {
    if(this.out.length === 0) {
      this._emptyIn();
    }
    return this.out[this.out.length - 1]
  }

  empty() {
    if(this.out.length > 0 || this.in.length > 0) {
      return false;;
    } else {
      return true;
    }

  }

  _emptyIn() {
    while(this.in.length) {
      this.out.push(this.in.pop());
    }
  }

}

test();



