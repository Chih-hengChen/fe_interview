/** https://leetcode.cn/problems/longest-palindromic-subsequence/description/
 * @param {string} s
 * @return {number}
 */
// 记忆化搜索
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    if (n === 0) return 0;
    const cache = new Array(n);
    for (let i = 0; i < n; i++) {
        cache[i] = new Array(n).fill(-1);
    }

    const dfs = (i, j) => {
        if (i > j) return 0;
        if (i === j) return 1;
        if (cache[i][j] !== -1) return cache[i][j];
        if (s[i] === s[j]) {
            cache[i][j] = dfs(i + 1, j - 1) + 2;
            return cache[i][j];
        }
        cache[i][j] = Math.max(dfs(i + 1, j), dfs(i, j - 1));
        return cache[i][j];
    };

    return dfs(0, n - 1);
};

// 递推
var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    
    return dp[0][n - 1];
};