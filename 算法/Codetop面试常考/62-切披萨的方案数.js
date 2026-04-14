// https://leetcode.cn/problems/number-of-ways-of-cutting-a-pizza
/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
var ways = function (pizza, k) {
  const rows = pizza.length;
  const cols = pizza[0].length;
  const pre = new Array(rows + 1)
    .fill(0)
    .map(() => new Array(cols + 1).fill(0));
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      pre[i][j] =
        pre[i - 1][j] +
        pre[i][j - 1] -
        pre[i - 1][j - 1] +
        (pizza[i - 1][j - 1] === "A" ? 1 : 0);
    }
  }
  // 查询函数：矩形 (r1,c1) 到 (r2,c2) 的苹果数，包含边界
  const hasApple = (r1, c1, r2, c2) => {
    let cnt =
      pre[r2 + 1][c2 + 1] - pre[r1][c2 + 1] - pre[r2 + 1][c1] + pre[r1][c1];
    return cnt > 0;
  };

  const MOD = 1e9 + 7;
  const memo = new Map();

  const dfs = (r, c, m) => {
    if (m === 1) {
      return hasApple(r, c, rows - 1, cols - 1) ? 1 : 0;
    }
    const key = `${r},${c},${m}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 垂直切
    for (let j = c; j < cols - 1; j++) {
      if (hasApple(r, c, rows - 1, j)) {
        // 左边部分送人，必须有苹果
        res = (res + dfs(r, j + 1, m - 1)) % MOD;
      }
    }
    // 水平切
    for (let i = r; i < rows - 1; i++) {
      if (hasApple(r, c, i, cols - 1)) {
        // 上边部分送人
        res = (res + dfs(i + 1, c, m - 1)) % MOD;
      }
    }
    memo.set(key, res);
    return res;
  };

  return dfs(0, 0, k);
};
