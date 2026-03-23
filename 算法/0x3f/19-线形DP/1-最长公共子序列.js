/** https://leetcode.cn/problems/longest-common-subsequence/description/
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 记忆化搜索
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const cache = [];
    for (let i = 0; i < n; i++) {
        cache[i] = new Array(m).fill(-1);
    }
    const dfs = (i, j) => {
        if (i < 0 || j < 0) return 0;
        if (cache[i][j] !== -1) return cache[i][j];
        if (text1[i] === text2[j]) {
            return dfs(i - 1, j - 1) + 1;
        }
        const ans = Math.max(dfs(i - 1, j), dfs(i, j - 1));
        cache[i][j] = ans;
        return ans;
    }
    return dfs(n - 1, m - 1);
};

// 递推
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const f = [];
    for (let i = 0; i <= n + 1; i++) {
        f[i] = new Array(m + 1).fill(0);
    }
    
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                f[i + 1][j + 1] = f[i][j] + 1;
            } else {
                f[i + 1][j + 1] = Math.max(f[i + 1][j], f[i][j + 1]);
            }
        }
    }
    return f[n][m];
};

// 递推空间优化
var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;
    const f = new Array(m + 1).fill(0);
    
    
    for (let i = 0; i < text1.length; i++) {
        let pre = 0;
        for (let j = 0; j < text2.length; j++) {
            let tmp = f[j + 1];
            if (text1[i] === text2[j]) {
                f[j + 1] = pre + 1;
            } else {
                f[j + 1] = Math.max(f[j], f[j + 1]);
            }
            pre = tmp;
        }
    }
    return f[m];
};