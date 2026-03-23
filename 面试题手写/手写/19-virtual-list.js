// 虚拟列表（简化版）
class VirtualList {
  constructor(container, list, itemHeight, visibleCount) {
    // TODO: 初始化虚拟列表
    // container: 容器元素
    // list: 完整数据列表
    // itemHeight: 每项高度
    // visibleCount: 可见项数量
  }

  getVisibleItems() {
    // TODO: 获取可见项
  }

  getTotalHeight() {
    // TODO: 获取总高度
  }

  getOffsetY() {
    // TODO: 获取偏移量
  }

  scrollTo(index) {
    // TODO: 滚动到指定索引
  }
}

// 测试
console.log('=== 虚拟列表测试 ===');
const container = { clientHeight: 300 }; // 模拟容器
const list = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
const itemHeight = 50;
const visibleCount = 6;

const virtualList = new VirtualList(container, list, itemHeight, visibleCount);

console.log('总高度:', virtualList.getTotalHeight()); // 50000
console.log('可见项数量:', visibleCount);
console.log('可见项:', virtualList.getVisibleItems());

virtualList.scrollTo(100);
console.log('\n滚动到索引100后:');
console.log('偏移Y:', virtualList.getOffsetY()); // 5000
console.log('可见项:', virtualList.getVisibleItems());
