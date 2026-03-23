// 手写 call、apply、bind
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fn = Symbol('fn');
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.myApply = function (context, args = []) {
  context = context || globalThis;
  const fn = Symbol('fn');
  context[fn] = this;
  const result = context[fn](...args);
  delete context[fn];
  return result;
};

Function.prototype.myBind = function (context, ...bindArgs) {
  const fn = this;
  return function (...args) {
    return fn.apply(context, [...bindArgs, ...args]);
  };
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
