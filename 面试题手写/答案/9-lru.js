// 双端链表节点
class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// LRU (Least Recently Used) 缓存
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = new Node(null, null); // 头节点（伪头部）
    this.tail = new Node(null, null); // 尾节点（伪尾部）
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // 将节点移到头部（最近使用）
  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  // 删除节点
  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  // 添加到头部
  _addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._moveToHead(node);
    } else {
      const node = new Node(key, value);
      this.map.set(key, node);
      this._addToHead(node);
      if (this.map.size > this.capacity) {
        const removed = this.tail.prev;
        this._removeNode(removed);
        this.map.delete(removed.key);
      }
    }
  }
}

// 测试
const cache = new LRUCache(3);

cache.put(1, 1);
cache.put(2, 2);
cache.put(3, 3);
console.log('put 1,2,3 后 get(1):', cache.get(1)); // 1

cache.put(4, 4); // 超过容量，删除最久未使用的(2)
console.log('put 4 后 get(2):', cache.get(2)); // -1
console.log('put 4 后 get(3):', cache.get(3)); // 3
console.log('put 4 后 get(4):', cache.get(4)); // 4
