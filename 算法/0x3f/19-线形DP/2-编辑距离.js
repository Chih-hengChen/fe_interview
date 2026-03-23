/** https://leetcode.cn/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const cache = [];
    for (let i = 0; i < n; i++) {
        cache[i] = new Array(m).fill(Infinity);
    }
    const dfs = (i, j) => {
        if (i < 0) return j + 1;
        if (j < 0) return i + 1;
        if (cache[i][j] !== Infinity) return cache[i][j];
        if (word1[i] === word2[j]) {
            return dfs(i - 1, j - 1);
        }
        const ans = Math.min(dfs(i - 1, j), dfs(i, j - 1), dfs(i - 1, j - 1)) + 1;
        cache[i][j] = ans;
        return ans;
    }
    return dfs(n - 1, m - 1);
};

var minDistance = function(word1, word2) {
    const n = word1.length;
    const m = word2.length;
    const dp = Array.from({length: n + 1}, () => Array(m + 1).fill(-1));

    for (let i = 0; i < n + 1; i++) {
        dp[i][0] = i;
    }
    for (let i = 0; i < m + 1; i++) {
        dp[0][i] = i;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i -1][j - 1] + 1);
            }
        }
    }

    return dp[n][m];
};