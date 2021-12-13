// implement stack using arrays
class Stack {
  constructor(){
    this.s_array = [];
  }

  peek() {
    return this.s_array[this.s_array.length - 1];
  }

  push(value) {
    this.s_array.push(value);
    return this;
  }

  pop() {
    this.s_array.pop();
    return this;
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();

console.log(myStack);
