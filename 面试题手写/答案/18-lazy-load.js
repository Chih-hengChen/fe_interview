// 图片懒加载
function lazyLoad(images) {
  return new Promise((resolve) => {
    let loaded = 0;
    const results = [];
    
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        results[index] = src;
        loaded++;
        if (loaded === images.length) {
          resolve(results);
        }
      };
      img.onerror = () => {
        results[index] = null;
        loaded++;
        if (loaded === images.length) {
          resolve(results);
        }
      };
      img.src = src;
    });
  });
}

// 图片预加载
function preloadImages(urls) {
  return Promise.all(urls.map(url => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => reject(new Error(`Failed to load: ${url}`));
      img.src = url;
    });
  }));
}

// 防抖（带立即执行选项）
function debounce(fn, delay, immediate = false) {
  let timer = null;
  let invoked = false;
  
  return function (...args) {
    if (timer) clearTimeout(timer);
    
    if (immediate && !invoked) {
      fn.apply(this, args);
      invoked = true;
    } else if (!immediate) {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    }
  };
}

// 节流（带尾执行选项）
function throttle(fn, interval, options = { trailing: true }) {
  let lastTime = 0;
  let timer = null;
  
  return function (...args) {
    const now = Date.now();
    const remaining = interval - (now - lastTime);
    
    if (remaining <= 0 || remaining > interval) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      lastTime = now;
      fn.apply(this, args);
    } else if (!timer && options.trailing) {
      timer = setTimeout(() => {
        lastTime = Date.now();
        timer = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
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
