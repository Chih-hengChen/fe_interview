// https://leetcode.cn/problems/fibonacci-number
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) return n;
  let n1 = 0;
  let n2 = 1;
  for (let i = 2; i <= n; i++) {
    let newN = n1 + n2;
    n1 = n2;
    n2 = newN;
  }
  return n2;
};
