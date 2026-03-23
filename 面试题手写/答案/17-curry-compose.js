// 科里化 (Currying)
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...args2) {
      return curried.apply(this, [...args, ...args2]);
    };
  };
}

// 组合函数 (Compose)
function compose(...fns) {
  if (fns.length === 0) return x => x;
  if (fns.length === 1) return fns[0];
  return fns.reduce((a, b) => (...args) => a(b(...args)));
}

// 管道函数 (Pipe)
function pipe(...fns) {
  return compose(...fns.reverse());
}

// 测试
console.log('--- 科里化 ---');
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log('add(1, 2, 3):', add(1, 2, 3));
console.log('curriedAdd(1)(2)(3):', curriedAdd(1)(2)(3));
console.log('curriedAdd(1, 2)(3):', curriedAdd(1, 2)(3));
console.log('curriedAdd(1)(2, 3):', curriedAdd(1)(2, 3));

console.log('\n--- 组合函数 ---');
const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const composed = compose(addOne, square, double);
console.log('compose(addOne, square, double)(2):', composed(2)); // (2 * 2)^2 + 1 = 17

const piped = pipe(double, square, addOne);
console.log('pipe(double, square, addOne)(2):', piped(2)); // (2 * 2)^2 + 1 = 17

console.log('\n--- 实际应用 ---');
const getName = obj => obj.name;
const toUpper = str => str.toUpperCase();
const greet = name => `Hello, ${name}!`;

const processUser = compose(greet, toUpper, getName);
console.log(processUser({ name: 'john' })); // Hello, JOHN!
