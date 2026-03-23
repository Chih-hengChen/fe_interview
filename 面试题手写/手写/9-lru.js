// 双端链表节点
class Node {
  constructor(key, value) {
    // TODO: 初始化节点属性
  }
}

// LRU (Least Recently Used) 缓存
class LRUCache {
  constructor(capacity) {
    // TODO: 初始化容量、HashMap、双端链表（头尾哨兵节点）
  }

  // 将节点移到头部（最近使用）
  _moveToHead(node) {
    // TODO: 实现
  }

  // 删除节点
  _removeNode(node) {
    // TODO: 实现
  }

  // 添加到头部
  _addToHead(node) {
    // TODO: 实现
  }

  get(key) {
    // TODO: 获取缓存值，同时将访问的节点移到最前面
  }

  put(key, value) {
    // TODO: 存入缓存，超过容量时删除最久未使用的
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

// 期望输出:
// put 1,2,3 后 get(1): 1
// put 4 后 get(2): -1
// put 4 后 get(3): 3
// put 4 后 get(4): 4
