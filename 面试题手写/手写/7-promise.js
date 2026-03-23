const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    // TODO: 初始化 state, value, handlers
    // executor(resolve, reject)
  }

  then(onFulfilled, onRejected) {
    // TODO: 实现 then 方法，支持链式调用
  }

  catch(onRejected) {
    // TODO: 实现 catch 方法
  }

  finally(callback) {
    // TODO: 实现 finally 方法
  }

  static resolve(value) {
    // TODO: 静态方法
  }

  static reject(reason) {
    // TODO: 静态方法
  }

  static all(promises) {
    // TODO: 静态方法 - 所有成功才成功
  }

  static race(promises) {
    // TODO: 静态方法 - 谁先完成返回谁
  }
}

// 测试
console.log('=== MyPromise 测试 ===\n');

console.log('--- 基础 then/catch ---');
new MyPromise((resolve) => resolve(1))
  .then(val => {
    console.log('resolve:', val);
    return val + 1;
  })
  .then(val => console.log('链式:', val));

console.log('\n--- Promise.all ---');
MyPromise.all([
  MyPromise.resolve(1),
  MyPromise.resolve(2),
  MyPromise.resolve(3)
]).then(results => console.log('all results:', results));

console.log('\n--- Promise.race ---');
MyPromise.race([
  new MyPromise(r => setTimeout(() => r('slow'), 100)),
  new MyPromise(r => setTimeout(() => r('fast'), 50))
]).then(result => console.log('race winner:', result));

console.log('\n=== 测试完成 ===');
