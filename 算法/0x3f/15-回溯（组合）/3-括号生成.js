/** https://leetcode.cn/problems/generate-parentheses/description/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const path = [];

    const dfs = (l, r) => {
        if (r > l || l > n || r > n) return;
        if (l === n && r === n) {
            result.push(path.join(''));
            return;
        }

        if (l <= n) {
            path.push('(');
            dfs(l + 1, r);
            path.pop();
        }
        if (r < l) {
            path.push(')');
            dfs(l, r + 1);
            path.pop();
        }
    };

    dfs(0, 0);
    return result;
};