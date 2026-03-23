/** https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/description/
 * @param {number[]} values
 * @return {number}
 */
// 记忆化搜索
var minScoreTriangulation = function(values) {
    const n = values.length;
    const cache = Array(n).fill(null).map(() => new Array(n).fill(-1));
    const dfs = (i, j) => {
        if (i + 1 === j) return 0;
        if (cache[i][j] !== -1) return cache[i][j];
        let res = Infinity;
        for (let k = i + 1; k < j; k++) {
            res = Math.min(dfs(i, k) + dfs(k, j) + values[i] * values[j] * values[k], res);
        }
        cache[i][j] = res;
        return res;
    };

    return dfs(0, n - 1);
};

// 递推
var minScoreTriangulation = function(values) {
    const n = values.length;
    const dp = Array(n).fill(null).map(() => new Array(n).fill(0));

    for (let i = n - 3; i >= 0; i--) {
        for (let j = i + 2; j < n; j++) {
            let res = Infinity;
            for (let k = i + 1; k < j; k++) {
                res = Math.min(dp[i][k] + dp[k][j] + values[i] * values[j] * values[k], res);
            }
            dp[i][j] = res;
        }
    }

    return dp[0][n - 1];
};