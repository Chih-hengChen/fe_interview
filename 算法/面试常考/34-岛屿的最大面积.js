// https://leetcode.cn/problems/max-area-of-island
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  const dfs = (i, j) => {
    let area = 1;
    grid[i][j] = 0;
    for (let [x, y] of [
      [i + 1, j],
      [i, j + 1],
      [i - 1, j],
      [i, j - 1],
    ]) {
      if (x >= 0 && y >= 0 && x < n && y < m && grid[x][y]) {
        area += dfs(x, y);
      }
    }
    return area;
  };
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) {
        result = Math.max(result, dfs(i, j));
      }
    }
  }
  return result;
};
