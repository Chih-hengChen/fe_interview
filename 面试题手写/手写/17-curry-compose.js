// 科里化 (Currying)
function curry(fn) {
  // TODO: 实现科里化函数
}

// 组合函数 (Compose)
function compose(...fns) {
  // TODO: 实现组合函数，从右到左执行
}

// 管道函数 (Pipe)
function pipe(...fns) {
  // TODO: 实现管道函数，从左到右执行
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
