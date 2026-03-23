// 手写数组方法: map, filter, reduce, find, some, every

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;
  
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

Array.prototype.mySome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

Array.prototype.myEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// 测试
const numbers = [1, 2, 3, 4, 5];

console.log('--- myMap ---');
console.log(numbers.myMap(x => x * 2)); // [2, 4, 6, 8, 10]

console.log('\n--- myFilter ---');
console.log(numbers.myFilter(x => x % 2 === 0)); // [2, 4]

console.log('\n--- myReduce ---');
console.log(numbers.myReduce((sum, x) => sum + x, 0)); // 15
console.log(numbers.myReduce((acc, x) => acc + x, 10)); // 25

console.log('\n--- myFind ---');
console.log(numbers.myFind(x => x > 3)); // 4

console.log('\n--- mySome ---');
console.log(numbers.mySome(x => x > 4)); // true
console.log(numbers.mySome(x => x > 10)); // false

console.log('\n--- myEvery ---');
console.log(numbers.myEvery(x => x > 0)); // true
console.log(numbers.myEvery(x => x > 1)); // false
