// 深度拷贝，支持循环引用、Date、RegExp、Map、Set、Symbol键
function deepClone(obj, hash = new WeakMap()) {
  // TODO: 实现深度拷贝
}

// 测试数据
const obj = {
  name: '张三',
  age: 25,
  date: new Date(),
  regex: /test/gi,
  map: new Map([['a', 1]]),
  set: new Set([1, 2, 3]),
  nested: {
    arr: [1, 2, 3],
    obj: { inner: 'deep' }
  },
  [Symbol('symbol')]: 'symbol value'
};

obj.self = obj; // 循环引用

const cloned = deepClone(obj);
console.log('克隆结果:', cloned);
console.log('是否相等:', cloned === obj); // false
console.log('循环引用是否保留:', cloned.self === cloned); // true
