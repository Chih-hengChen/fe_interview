// 手写数组方法: map, filter, reduce, find, some, every

Array.prototype.myMap = function (callback) {
  // TODO: 实现 map
};

Array.prototype.myFilter = function (callback) {
  // TODO: 实现 filter
};

Array.prototype.myReduce = function (callback, initialValue) {
  // TODO: 实现 reduce
};

Array.prototype.myFind = function (callback) {
  // TODO: 实现 find
};

Array.prototype.mySome = function (callback) {
  // TODO: 实现 some
};

Array.prototype.myEvery = function (callback) {
  // TODO: 实现 every
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
