// 数组扁平化（多种实现方式）

// 方式1: reduce 递归
function flatten1(arr) {
  return arr.reduce((acc, val) => {
    return Array.isArray(val) 
      ? acc.concat(flatten1(val)) 
      : acc.concat(val);
  }, []);
}

// 方式2: 使用 some + concat
function flatten2(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// 方式3: 使用栈
function flatten3(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const item = stack.pop();
    if (Array.isArray(item)) {
      stack.push(...item);
    } else {
      result.unshift(item);
    }
  }
  return result;
}

// 方式4: 使用正则（仅适用简单数组）
function flatten4(arr) {
  return arr.toString().split(',').map(item => Number(item));
}

// 方式5: 指定深度
function flattenDeep(arr, depth = Infinity) {
  if (depth === 0) return arr;
  return arr.reduce((acc, val) => {
    return Array.isArray(val) 
      ? acc.concat(flattenDeep(val, depth - 1)) 
      : acc.concat(val);
  }, []);
}

// 测试
const arr = [1, [2, 3, [4, 5, [6, 7]]], 8, [9, [10]]];
console.log('原数组:', arr);
console.log('flatten1:', flatten1(arr));
console.log('flatten2:', flatten2(arr));
console.log('flatten3:', flatten3(arr));
console.log('flatten4:', flatten4(arr));
console.log('flattenDeep (depth=1):', flattenDeep(arr, 1));
console.log('flattenDeep (depth=2):', flattenDeep(arr, 2));
