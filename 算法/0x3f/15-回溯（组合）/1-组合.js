/** https://leetcode.cn/problems/combinations/description/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
// 枚举下一个数选哪个
var combine = function(n, k) {
    const result = [];
    const path = [];

    const dfs = (i) => {
        if (i < (k - path.length)) return;
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let j = i; j >= 0; j--) {
            path.push(j);
            dfs(j - 1);
            path.pop();
        }
    };
    dfs(n);
    return result;
};

// 选或者不选
var combine2 = function(n, k) {
    const result = [];
    const path = [];

    const dfs = (i) => {
        const d = k - path.length;
        if (d === 0) {
            result.push([...path]);
            return;
        }

        if (d < i) {
            dfs(i - 1); // 不选当前数，直接进行递归
        }

        path.push(i); // 选了当前数，然后进行递归
        dfs(i - 1);
        path.pop();
    };
    dfs(n);
    return result;
};