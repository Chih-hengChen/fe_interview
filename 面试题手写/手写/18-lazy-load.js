// 图片懒加载
function lazyLoad(images) {
  // TODO: 实现图片懒加载
}

// 图片预加载
function preloadImages(urls) {
  // TODO: 实现图片预加载，返回 Promise
}

// 防抖（带立即执行选项）
function debounce(fn, delay, immediate = false) {
  // TODO: 实现带立即执行选项的防抖
}

// 节流（带尾执行选项）
function throttle(fn, interval, options = { trailing: true }) {
  // TODO: 实现带尾执行选项的节流
}

// 测试 - 图片懒加载
console.log('=== 图片懒加载模拟测试 ===');
const mockLoadImage = (src) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`图片加载完成: ${src}`);
      resolve(src);
    }, Math.random() * 1000);
  });
};

const imageUrls = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];
lazyLoad(imageUrls).then(results => {
  console.log('所有图片加载完成:', results);
});

// 测试 - 图片预加载
console.log('\n=== 图片预加载测试 ===');
preloadImages(['a.png', 'b.png', 'c.png']).then(results => {
  console.log('预加载完成:', results);
});

// 测试 - 防抖（立即执行）
console.log('\n=== 防抖（立即执行）测试 ===');
const immediateDebounce = debounce((name) => {
  console.log(`立即执行: ${name}`);
}, 300, true);

immediateDebounce('第一次'); // 立即执行
immediateDebounce('第二次'); // 取消
immediateDebounce('第三次'); // 取消

// 测试 - 节流（尾执行）
console.log('\n=== 节流（尾执行）测试 ===');
const trailingThrottle = throttle((name) => {
  console.log(`尾执行: ${name}`);
}, 200, { trailing: true });

trailingThrottle('第1次');
trailingThrottle('第2次');
trailingThrottle('第3次');
