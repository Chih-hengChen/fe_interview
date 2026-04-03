// https://leetcode.cn/problems/coin-change
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = coins.length;
  const map = {};

  const dfs = (i, left) => {
    const cache = `${i}-${left}`;
    if (map[cache]) {
      return map[cache];
    }

    if (i < 0) {
      return left === 0 ? 0 : Infinity;
    }

    if (left < coins[i]) {
      return dfs(i - 1, left);
    }
    const res = Math.min(dfs(i - 1, left), dfs(i, left - coins[i]) + 1);
    map[cache] = res;
    return res;
  };
  const result = dfs(n - 1, amount);
  return result < Infinity ? result : -1;
};
