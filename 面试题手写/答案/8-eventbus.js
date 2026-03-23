class EventBus {
  constructor() {
    this.events = new Map(); // 统一存储，每个事件对应一个数组，元素为 { callback, context, once }
  }

  on(event, callback, context = null) {
    return this._addListener(event, callback, context, false);
  }

  once(event, callback, context = null) {
    return this._addListener(event, callback, context, true);
  }

  _addListener(event, callback, context, once) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    const handler = { callback, context, once };
    this.events.get(event).push(handler);
    // 返回取消函数
    return () => this.off(event, callback, context);
  }

  off(event, callback, context = null) {
    if (!this.events.has(event)) return;
    const handlers = this.events.get(event);
    // 精确匹配 callback 和 context
    const filtered = handlers.filter(
      h => h.callback !== callback || h.context !== context
    );
    if (filtered.length === 0) {
      this.events.delete(event);
    } else {
      this.events.set(event, filtered);
    }
  }

  emit(event, ...args) {
    if (!this.events.has(event)) return;
    const handlers = this.events.get(event);
    // 为了防止在遍历过程中 handlers 被修改，可以先复制一份
    const toTrigger = handlers.slice();
    for (const { callback, context, once } of toTrigger) {
      try {
        callback.apply(context, args);
      } catch (err) {
        console.error(`Error in event "${event}" listener:`, err);
      }
      if (once) {
        // 移除一次性监听（注意：这里移除的是原 handlers 中的项）
        this.off(event, callback, context);
      }
    }
  }

  clear(event) {
    this.events.delete(event);
  }

  clearAll() {
    this.events.clear();
  }
}

// 测试
const bus = new EventBus();

console.log('=== EventBus 测试 ===\n');

// on/off 测试
const handler1 = (data) => console.log('handler1:', data);
const handler2 = (data) => console.log('handler2:', data);

bus.on('user:login', handler1);
bus.on('user:login', handler2);
console.log('--- 触发 login 事件 ---');
bus.emit('user:login', { userId: 1, name: '张三' });

bus.off('user:login', handler1);
console.log('\n--- 移除 handler1 后 ---');
bus.emit('user:login', { userId: 2, name: '李四' });

// once 测试
console.log('\n--- once 测试 ---');
bus.once('app:init', (data) => console.log('once handler:', data));
bus.emit('app:init', { initialized: true });
bus.emit('app:init', { initialized: false });
console.log('第二次 emit 没有输出，因为 once 只触发一次');

// 上下文测试
console.log('\n--- 上下文测试 ---');
class UserService {
  constructor() {
    bus.on('message', this.handleMessage, this);
  }
  handleMessage(msg) {
    console.log('UserService 收到:', msg, '| this:', this.constructor.name);
  }
}
const service = new UserService();
bus.emit('message', 'Hello from EventBus');

// clearAll 测试
console.log('\n--- clearAll 测试 ---');
bus.clearAll();
bus.emit('user:login', { test: '无订阅者' });
console.log('已清空所有事件，无输出');

console.log('\n=== 测试完成 ===');
