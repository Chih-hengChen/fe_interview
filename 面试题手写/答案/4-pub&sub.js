class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return () => this.unsubscribe(event, callback);
  }

  unsubscribe(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}

// 测试
const pubsub = new PubSub();

// 订阅者1
const sub1 = pubsub.subscribe('news', (data) => {
  console.log('订阅者1收到消息:', data);
});

// 订阅者2
const sub2 = pubsub.subscribe('news', (data) => {
  console.log('订阅者2收到消息:', data);
});

// 订阅另一个主题
pubsub.subscribe('weather', (data) => {
  console.log('天气更新:', data);
});

console.log('--- 发布新闻 ---');
pubsub.publish('news', { title: 'JavaScript发布订阅模式', content: '测试成功!' });

console.log('\n--- 取消订阅后发布新闻 ---');
sub1(); // 取消订阅者1
pubsub.publish('news', { title: '第二条新闻', content: '只有订阅者2能收到' });

console.log('\n--- 发布天气 ---');
pubsub.publish('weather', { temp: 25, condition: '晴天' });

console.log('\n--- 测试取消所有订阅 ---');
pubsub.events = {}; // 清空所有事件
pubsub.publish('news', { title: '测试', content: '不会收到' });
console.log('所有订阅已清空，新闻发布但无接收者');
