// https://leetcode.cn/problems/lru-cache/description/
class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map();
  this.capacity = capacity;
  this.head = new Node(null, null);
  this.tail = new Node(null, null);
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.removeNode = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.insertNode = function (node) {
  const next = this.head.next;
  this.head.next = node;
  next.prev = node;
  node.next = next;
  node.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.get(key)) return -1;
  const node = this.map.get(key);
  this.removeNode(node);
  this.insertNode(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val = value;
    this.removeNode(node);
    this.insertNode(node);
    this.map.set(key, node);
  } else {
    const node = new Node(key, value);
    if (this.map.size === this.capacity) {
      const delNode = this.tail.prev;
      this.removeNode(delNode);
      this.map.delete(delNode.key);
    }
    this.insertNode(node);
    this.map.set(key, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
