// 防抖 (debounce): 触发后等待n秒无操作才执行，n秒内有操作则重新计时
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 节流 (throttle): 触发后n秒内只执行一次，n秒后可再次执行
function throttle(fn, interval) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, interval);
    }
  };
}

// 时间戳版节流（立即执行）
function throttleImmediate(fn, interval) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

// ============ 测试 ============
console.log('=== 防抖测试 ===');
const debouncedFn = debounce((name) => {
  console.log(`执行: ${name}`);
}, 300);

debouncedFn('第一次'); // 被取消
debouncedFn('第二次'); // 被取消
debouncedFn('第三次'); // 300ms后执行

setTimeout(() => {
  console.log('\n=== 节流测试 ===');
  const throttledFn = throttle((name) => {
    console.log(`执行: ${name}`);
  }, 200);

  throttledFn('第1次');
  throttledFn('第2次');
  throttledFn('第3次');
  
  setTimeout(() => {
    throttledFn('1秒后第4次'); // 可执行
  }, 1000);
}, 500);
