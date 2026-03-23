const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      if (this.state !== PENDING) return;
      if (value && typeof value === 'object' && typeof value.then === 'function') {
        value.then(resolve, reject);
        return;
      }

      this.state = FULFILLED;
      this.value = value;
      queueMicrotask(() => {
        this.handlers.forEach(handle => handle.onFulfilled());
      });
    }

    const reject = (reason) => {
      if (this.state !== PENDING) return;

      this.state = REJECTED;
      this.value = reason;
      queueMicrotask(() => {
        this.handlers.forEach(handle => handle.onRejected());
      });
    }
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const handle = () => {
        try {
          const result = typeof onFulfilled === 'function' ? onFulfilled(this.value) : this.value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      const handleReject = () => {
        try {
          const result = typeof onRejected === 'function' ? onRejected(this.value) : this.value;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === PENDING) {
        this.handlers.push({ onFulfilled: handle, onRejected: handleReject });
      } else if (this.state === FULFILLED) {
        queueMicrotask(handle);
      } else {
        queueMicrotask(handleReject);
      }
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      reason => MyPromise.resolve(callback()).then(() => { throw reason; })
    );
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }

  static all(promises) {
    return new MyPromise((resolve, reject) => {
      let count = 0;
      const results = new Array(promises.length);
      promises.forEach((p, i) => {
        MyPromise.resolve(p).then((val) => {
          results[i] = val;
          count++;
          if (count === promises.length) resolve(results);
        }, reject);
      });
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(p => MyPromise.resolve(p).then(resolve, reject));
    })
  }
}

// ============ 测试 ============
console.log('=== MyPromise 测试 ===\n');

// 基本用法
console.log('--- 基础 then/catch ---');
new MyPromise((resolve) => resolve(1))
  .then(val => {
    console.log('resolve:', val);
    return val + 1;
  })
  .then(val => {
    console.log('链式:', val);
  });

// 链式调用
console.log('\n--- 链式调用 ---');
MyPromise.resolve(1)
  .then(x => x + 10)
  .then(x => {
    console.log('1 + 10 =', x);
    return x;
  })
  .catch(err => console.error('catch:', err));

// Promise.all
console.log('\n--- Promise.all ---');
MyPromise.all([
  MyPromise.resolve(1),
  MyPromise.resolve(2),
  MyPromise.resolve(3)
]).then(results => console.log('all results:', results));

// Promise.race
console.log('\n--- Promise.race ---');
MyPromise.race([
  new MyPromise(r => setTimeout(() => r('slow'), 100)),
  new MyPromise(r => setTimeout(() => r('fast'), 50))
]).then(result => console.log('race winner:', result));

// async/await 兼容测试
console.log('\n--- 模拟 async 函数 ---');
async function asyncFn() {
  const a = await MyPromise.resolve(100);
  const b = await MyPromise.resolve(200);
  return a + b;
}
asyncFn().then(result => console.log('async result:', result));

console.log('\n=== 测试完成 ===');
