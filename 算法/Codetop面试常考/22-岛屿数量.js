// https://leetcode.cn/problems/number-of-islands
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const dfs = (r, c) => {
    if (r >= m || c >= n || r < 0 || c < 0 || grid[r][c] === "0") return;

    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };

  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        dfs(i, j);
        result += 1;
      }
    }
  }

  return result;
};
