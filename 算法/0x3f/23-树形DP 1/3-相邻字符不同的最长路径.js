/** https://leetcode.cn/problems/longest-path-with-different-adjacent-characters/description/
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const n = parent.length;
    const g = new Array(n).fill(0).map(() => []);
    for (let i = 1; i < n; i++) {
        g[parent[i]].push(i);
    }
    let result = 0;
    const dfs = (x) => {
        let x_len = 0;
        for (let y of g[x]) {
            const y_len = dfs(y) + 1;
            if (s[x] !== s[y]) {
                result = Math.max(result, x_len + y_len);
                x_len = Math.max(x_len, y_len);
            }
        }
        return x_len;
    };

    dfs(0);
    return result + 1;
};