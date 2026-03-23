// 防抖: 触发后等待n秒无操作才执行
function debounce(fn, delay) {
  // TODO: 实现防抖
}

// 节流: 固定时间间隔内只执行一次
function throttle(fn, interval) {
  // TODO: 实现节流
}

// 测试 - 防抖
console.log('=== 防抖测试 ===');
const debouncedFn = debounce((name) => {
  console.log(`执行: ${name}`);
}, 300);

debouncedFn('第一次'); // 被取消
debouncedFn('第二次'); // 被取消
debouncedFn('第三次'); // 300ms后执行

// 测试 - 节流
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
