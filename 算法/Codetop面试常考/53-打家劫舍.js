// https://leetcode.cn/problems/house-robber
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  const f = new Array(n + 2).fill(0);
  for (let i = 0; i < n; i++) {
    // f[i] = Math.max(f[i - 2] + nums[i], f[i - 1]);
    // 避免复数下标，等比例 + 2
    f[i + 2] = Math.max(f[i] + nums[i], f[i + 1]);
  }
  return f[n + 1];
};

// 空间优化
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  let f0 = 0;
  let f1 = 0;
  for (let i = 0; i < n; i++) {
    let new_f = Math.max(f0 + nums[i], f1);
    f0 = f1;
    f1 = new_f;
  }
  return f1;
};
