// https://leetcode.cn/problems/rotate-image
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length;
  // 转置
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // 行反转
  for (let i = 0; i < n; i++) {
    let j = 0;
    let k = n - 1;
    while (j < k) {
      [matrix[i][j], matrix[i][k]] = [matrix[i][k], matrix[i][j]];
      j++;
      k--;
    }
  }
};
