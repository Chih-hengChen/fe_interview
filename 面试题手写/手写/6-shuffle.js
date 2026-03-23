// Fisher-Yates 洗牌算法
function shuffle(arr) {
  // TODO: 实现洗牌算法
}

// 测试
console.log('=== Fisher-Yates 洗牌算法测试 ===\n');

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('原数组:', original);

console.log('\n--- 洗牌5次 ---');
for (let i = 1; i <= 5; i++) {
  console.log(`第${i}次:`, shuffle([...original]));
}

// 期望: 每次输出不同的随机排列
