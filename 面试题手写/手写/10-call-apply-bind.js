// 手写 call、apply、bind
Function.prototype.myCall = function (context) {
  // TODO: 实现 call
};

Function.prototype.myApply = function (context, args) {
  // TODO: 实现 apply
};

Function.prototype.myBind = function (context) {
  // TODO: 实现 bind
};

// 测试
const obj = {
  name: '张三',
  age: 25
};

function greet(prefix, suffix) {
  return `${prefix}${this.name}${suffix}`;
}

console.log('--- call ---');
console.log(greet.myCall(obj, 'Hello ', '!')); // Hello 张三!

console.log('\n--- apply ---');
console.log(greet.myApply(obj, ['Hi ', '~'])); // Hi 张三~

console.log('\n--- bind ---');
const boundFn = greet.myBind(obj);
console.log(boundFn('Good ', ' day')); // Good 张三 day
