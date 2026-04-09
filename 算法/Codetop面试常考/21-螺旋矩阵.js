// https://leetcode.cn/problems/spiral-matrix
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  const n = matrix.length;
  const m = matrix[0].length;
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let d = 0;

  let [a, b] = direction[d];
  let x = 0;
  y = 0;
  while (result.length < n * m) {
    result.push(matrix[x][y]);
    matrix[x][y] = "visited";
    let i = x + a; // 下一个坐标
    let j = y + b;
    // 需要调转方向
    if (i >= n || j >= m || i < 0 || j < 0 || matrix[i][j] === "visited") {
      d = (d + 1) % 4;
      [a, b] = direction[d];
      i = x + a;
      j = y + b;
    }
    x = i;
    y = j;
  }
  return result;
};
