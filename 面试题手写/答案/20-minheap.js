// 最小堆简单实现
class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  peek() {
    return this.heap[0];
  }
  push(val) {
    this.heap.push(val);
    this._bubbleUp(this.heap.length - 1);
  }
  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }
    return min;
  }
  _bubbleUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2); // 大根堆实现
      if (this.heap[parent] <= this.heap[idx]) break; // if (this.heap[parentIdx] >= this.heap[idx]) break;
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }
  _sinkDown(idx) {
    const len = this.heap.length;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let swap = null;
      // 大根堆实现
      //   let swap = null;
      //   if (left < len && this.heap[left] > this.heap[idx]) swap = left;
      //   if (right < len && this.heap[right] > (swap === null ? this.heap[idx] : this.heap[left])) swap = right;
      if (left < len && this.heap[left] < this.heap[idx]) swap = left;
      if (
        right < len &&
        this.heap[right] < (swap === null ? this.heap[idx] : this.heap[left])
      )
        swap = right;
      if (swap === null) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  }
}
