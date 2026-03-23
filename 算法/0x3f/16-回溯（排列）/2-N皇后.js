/** https://leetcode.cn/problems/n-queens/description/
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const result = [];
    const path = []; // path[i] = j表示第i行的皇后放在了第j列，下标对应行数，值对应列数
    const cols = new Set();
    const dia1 = new Set(); // 左对角线，r + c相等
    const dia2 = new Set(); // 右对角线，c - r相等

    const buildAnswer = (arr) => {
        const answer = [];
        for (let i = 0; i < arr.length; i++) {
            let str = '.'.repeat(arr[i]) + 'Q' + '.'.repeat(n - arr[i] - 1);
            answer.push(str);
        }
        return answer;
    }

    const dfs = (row) => {
        if (row === n) {
            result.push(buildAnswer(path));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (cols.has(col) || dia1.has(row + col) || dia2.has(col - row)) {
                continue;
            }
            
            path[row] = col;
            cols.add(col);
            dia1.add(col + row);
            dia2.add(col - row);
            dfs(row + 1);

            cols.delete(col);
            dia1.delete(col + row);
            dia2.delete(col - row);
        }
    }

    dfs(0);
    return result;
};