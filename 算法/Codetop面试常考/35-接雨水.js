// https://leetcode.cn/problems/trapping-rain-water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let result = 0;
  let stk = [];

  for (let i = 0; i < height.length; i++) {
    const h = height[i];
    let n = stk.length;
    while (n && h > height[stk[n - 1]]) {
      const h_mid = height[stk.pop()];
      n = stk.length;
      if (!n) break;
      const left = stk[n - 1];
      const dh = Math.min(height[left], h) - h_mid;
      result += dh * (i - left - 1);
    }
    stk.push(i);
  }
  return result;
};
