// https://leetcode.cn/problems/qing-wa-tiao-tai-jie-wen-ti-lcof
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function (num) {
  if (num <= 1) return 1;
  let p0 = 1;
  let p1 = 1;
  const MOD = 1e9 + 7;
  for (let i = 2; i <= num; i++) {
    let newp = (p0 + p1) % MOD;
    p0 = p1;
    p1 = newp;
  }
  return p1;
};
