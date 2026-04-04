// https://leetcode.cn/problems/fei-bo-na-qi-shu-lie-lcof
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;
  let f1 = 0;
  let f2 = 1;
  for (let i = 2; i <= n; i++) {
    let newF2 = (f1 + f2) % 1000000007;
    f1 = f2;
    f2 = newF2;
  }
  return f2;
};
