// Fisher-Yates 洗牌算法（原地打乱数组）
function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ============ 测试 ============
console.log('=== Fisher-Yates 洗牌算法测试 ===\n');

const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('原数组:', original);

console.log('\n--- 洗牌5次 ---');
for (let i = 1; i <= 5; i++) {
  console.log(`第${i}次:`, shuffle(original));
}

// 验证均匀性（统计各位置数字出现频率）
console.log('\n--- 均匀性测试 (10000次) ---');
const counts = {};
for (let i = 0; i < 10000; i++) {
  const shuffled = shuffle(original);
  shuffled.forEach((num, idx) => {
    const key = `${num}-${idx}`;
    counts[key] = (counts[key] || 0) + 1;
  });
}

console.log('每个数字在每个位置出现次数（理论上都接近1000）:');
Object.entries(counts)
  .slice(0, 6)
  .forEach(([key, count]) => {
    console.log(`  数字${key.replace('-', '在位置')}: ${count}`);
  });



//   Fisher-Yates 洗牌算法详解
// 核心思想
// Fisher-Yates 洗牌算法（也称为 Knuth 洗牌）是一种用于生成一个有限序列的随机排列的算法。
// 它的核心思想是 从后向前扫描，每次从未处理的部分随机选一个元素，与当前位置交换。这样保证了每个元素出现在每个位置的概率相等，即产生均匀随机排列。

// 算法步骤（以数组为例）
// 假设有一个长度为 n 的数组 arr，下标从 0 到 n-1。

// 从最后一个位置 i = n-1 开始，向前遍历到 i = 1（或 0）。

// 对于每个 i，生成一个随机整数 j，范围在 [0, i]（包括 i）。

// 交换 arr[i] 和 arr[j]。

// 继续向前移动 i，直到处理完所有元素。

// 也可以从前往后，但通常从后往前更直观且代码简洁。

// 为什么是正确的（均匀性）
// 第一次迭代（i = n-1），从所有 n 个元素中随机选择一个放到最后一个位置，概率 1/n。

// 第二次迭代（i = n-2），从剩下的 n-1 个元素中随机选择一个放到倒数第二个位置，每个剩余元素被选中的概率为 (1/(n-1))。

// 最终，任意一个特定排列出现的概率为 1/n!，因此是均匀的。

// 代码示例（JavaScript）
// javascript
// function shuffle(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1)); // 0 <= j <= i
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
// }
// 时间复杂度与空间复杂度
// 时间复杂度：O(n)

// 空间复杂度：O(1)（原地交换）

// 其他洗牌算法
// 1. 随机排序法（使用排序和随机比较）
// 思路：给每个元素附加一个随机权重，然后按照权重排序。
// 实现：

// javascript
// arr.sort(() => Math.random() - 0.5);
// 问题：这种方法不是均匀随机的，因为排序算法对比较函数的预期行为有依赖，且不同浏览器的排序算法可能产生不同分布。此外，随机比较可能导致排序不稳定且效率低（O(n log n)）。

// 2. 暴力法：生成所有排列随机选一个
// 思路：先列出所有 n! 个排列，然后随机选择一个。
// 问题：当 n 稍大时，n! 巨大，不可行。只适用于极小的 n。

// 3. 朴素随机交换（多次随机交换）
// 思路：重复多次随机选择两个位置交换。
// 问题：需要多少次交换才能达到均匀？理论证明需要足够多轮，但不容易保证均匀，且效率低于 Fisher-Yates。

// 4. Reservoir Sampling（蓄水池抽样）
// 适用于从一个大规模数据流中随机抽取 k 个元素，也可以看作一种洗牌算法（当 k = n 时）。但它不是原地洗牌，而是逐个决定是否保留元素。

// 5. 其他变种
// Sattolo 算法：Fisher-Yates 的一种变体，用于生成循环排列（即所有元素位置都改变），随机范围改为 [0, i-1]。

// 并行洗牌：适用于分布式环境，将数据分片后在每个分片内洗牌，然后合并，但需保证全局均匀性。

// 总结
// Fisher-Yates 是最优的洗牌算法：简单、高效、均匀。

// 避免使用基于排序的随机洗牌，因为它的随机性不可靠且性能较差。

// 其他算法要么无法保证均匀，要么效率太低，只有 Fisher-Yates 及其变种在实践中被广泛采用。