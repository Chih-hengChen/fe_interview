class PubSub {
  constructor() {
    // TODO: 初始化事件存储
  }

  subscribe(event, callback) {
    // TODO: 订阅事件，返回取消订阅的函数
  }

  unsubscribe(event, callback) {
    // TODO: 取消订阅
  }

  publish(event, data) {
    // TODO: 发布事件
  }
}

// 测试
const pubsub = new PubSub();

const sub1 = pubsub.subscribe('news', (data) => {
  console.log('订阅者1收到消息:', data);
});

const sub2 = pubsub.subscribe('news', (data) => {
  console.log('订阅者2收到消息:', data);
});

pubsub.subscribe('weather', (data) => {
  console.log('天气更新:', data);
});

console.log('--- 发布新闻 ---');
pubsub.publish('news', { title: 'JavaScript发布订阅模式', content: '测试成功!' });

console.log('\n--- 取消订阅后发布新闻 ---');
sub1();
pubsub.publish('news', { title: '第二条新闻', content: '只有订阅者2能收到' });

console.log('\n--- 发布天气 ---');
pubsub.publish('weather', { temp: 25, condition: '晴天' });
