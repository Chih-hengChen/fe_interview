function deepClone(obj, hash = new WeakMap()) {
  // 处理 null 或非对象
  if (obj === null || typeof obj !== 'object') return obj;
  // 处理 Date 和 RegExp
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  // 处理循环引用，如果 hash 中有，直接返回
  if (hash.has(obj)) return hash.get(obj);

  // 处理 Map
  if (obj instanceof Map) {
    const map = new Map();
    hash.set(obj, map);
    obj.forEach((val, key) => {
      map.set(key, deepClone(val, hash));
    });
    return map;
  }

  // 处理 Set
  if (obj instanceof Set) {
    const set = new Set();
    hash.set(obj, set);
    obj.forEach(val => {
      set.add(deepClone(val, hash));
    });
    return set;
  }

  // 处理数组和普通对象
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);
  
  // 使用 Reflect.ownKeys 获取所有键，包括 Symbol
  Reflect.ownKeys(obj).forEach(key => {
    cloneObj[key] = deepClone(obj[key], hash);
  });

  return cloneObj;
}
