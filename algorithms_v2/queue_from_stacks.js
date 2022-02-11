class Queue {
  #in = [];
  #out = [];
  enqueue(n) {
    this.#in.push(n);
  }
  dequeue() {
    if(this.#out.length === 0) {
      this.#updateOutStack();
    } 
    return this.#out.pop();
  }
  peek() {
    if(this.#out === 0) {
      this.#updateOutStack();
    }   
    return this.#out[this.#out.length - 1]
  }

  empty() {
    return this.#out.length === 0 && this.#in.length === 0;
  }

  #updateOutStack() {
      while(this.#in.length > 0) {
        this.#out.push(this.#in.pop());
      }
  }
}

  // [1, 2, 3, 4, 5] <- dequeue [1, 2, 3, 4, 5]
  //                            [1, 2, 3, 4, 5] pop -> [5, 4, 3, 2, 1]
  //                            [5, 4, 3, 2, 1] pop reversed -> [1, 2, 3, 4, 5]


let newQueue = new Queue();
newQueue.enqueue(1); newQueue.dequeue();
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.dequeue();
newQueue.enqueue(4);
newQueue.enqueue(5);
console.log(newQueue.peek());

let results = [];

while(!newQueue.empty()) {
  results.push(newQueue.dequeue());
}
console.log(results);
