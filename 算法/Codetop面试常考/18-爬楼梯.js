// https://leetcode.cn/problems/climbing-stairs/description/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n <= 1) return 1;
  let prev = 1;
  let cur = 1;
  for (let i = 2; i <= n; i++) {
    const temp = prev + cur;
    prev = cur;
    cur = temp;
  }
  return cur;
};
