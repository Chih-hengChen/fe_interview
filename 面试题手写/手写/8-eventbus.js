class EventBus {
  constructor() {
    // TODO: 初始化事件存储
  }

  on(event, callback, context = null) {
    // TODO: 订阅事件，支持上下文绑定，返回取消订阅函数
  }

  off(event, callback) {
    // TODO: 取消订阅
  }

  emit(event, ...args) {
    // TODO: 发布事件
  }

  once(event, callback, context = null) {
    // TODO: 只触发一次的订阅
  }

  clear(event) {
    // TODO: 清除指定事件
  }

  clearAll() {
    // TODO: 清除所有事件
  }
}

// 测试
const bus = new EventBus();

const handler1 = (data) => console.log('handler1:', data);
const handler2 = (data) => console.log('handler2:', data);

bus.on('user:login', handler1);
bus.on('user:login', handler2);
console.log('--- 触发 login 事件 ---');
bus.emit('user:login', { userId: 1, name: '张三' });

bus.off('user:login', handler1);
console.log('\n--- 移除 handler1 后 ---');
bus.emit('user:login', { userId: 2, name: '李四' });

console.log('\n--- once 测试 ---');
bus.once('app:init', (data) => console.log('once handler:', data));
bus.emit('app:init', { initialized: true });
bus.emit('app:init', { initialized: false });
// 期望: 第二次 emit 不触发

console.log('\n--- clearAll 测试 ---');
bus.clearAll();
bus.emit('user:login', { test: '无订阅者' });
console.log('期望: 无输出');
