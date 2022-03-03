class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this._heep[0];
  }

  _parent(idx) {
    return Math.floor((idx - 1)/2);
  }

  _leftChild(idx) {
    return idx * 2 + 1;
  }

  _rightChild(idx) {
    return idx * 2 + 2;
  }

  _swap(i, y) {
    [this._heap[i], this._heap[y]] = [this._heap[y], this._heap[i]];
  }
  
  _compare(i, y) {
    return this._comparator(this._heap[i], this._heap[y]);
  }

  print() {
    console.log(this._heap);
  }

  push(value) {
    this._heap.push(value);
    this._sift_up();
  }
  _sift_up() {
    let idx = this.size() - 1;
    while(idx >= 0 && this._compare(idx, this._parent(idx))) {
      this._swap(idx, this._parent(idx));
      idx = this._parent(idx);
    }
  }
  
  pop() {
    if(this.size() > 1) {
      this._swap(0, this.size() - 1);
    }
    const poppedValue = this._heap.pop();
    this._sift_down();
    return poppedValue;
  }

  _sift_down() {
    let idx = 0;
    while(
      (this._leftChild(idx) < this.size() &&
       this._compare(this._leftChild(idx), idx)) ||
      (this._rightChild(idx) < this.size() &&
       this._compare(this._rightChild(idx), idx))
    ) {
      const greaterNodeIdx =
        this._rightChild(idx) < this.size() &&
        this._compare(this._rightChild(idx), this._leftChild(idx))
          ? this._rightChild(idx)
          : this._leftChild(idx);
      this._swap(greaterNodeIdx, idx);
      idx = greaterNodeIdx;
    }
  }
}

let check = [];
let prio = new PriorityQueue;
prio.push(4);
prio.push(5);
prio.push(7);
prio.push(6);
prio.push(3);
prio.push(9);
prio.push(8);
prio.push(10);
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
check.push(prio.pop());
prio.print();
console.log(check);
