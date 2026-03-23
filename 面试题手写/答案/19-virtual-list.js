// 虚拟列表（简化版）
class VirtualList {
  constructor(container, list, itemHeight, visibleCount) {
    this.container = container;
    this.list = list;
    this.itemHeight = itemHeight;
    this.visibleCount = visibleCount;
    this.scrollTop = 0;
  }

  getVisibleItems() {
    const startIndex = Math.floor(this.scrollTop / this.itemHeight);
    const endIndex = Math.min(startIndex + this.visibleCount, this.list.length);
    return this.list.slice(startIndex, endIndex);
  }

  getTotalHeight() {
    return this.list.length * this.itemHeight;
  }

  getOffsetY() {
    return this.scrollTop;
  }

  scrollTo(index) {
    this.scrollTop = index * this.itemHeight;
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
