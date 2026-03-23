/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const path = [];
    const result = [];

    const dfs = (i, t) => {
        const d = k - path.length;
        if (t < 0 || t > (i * 2 - d + 1) * d / 2) return;
        if (path.length === k) {
            result.push([...path]);
            return;
        }

        for (let j = i; j >= d; j--) {
            path.push(j);
            dfs(j - 1, t - j);
            path.pop();
        }
    };

    dfs(9, n);
    return result;
};

// 选或者不选
var combinationSum3II = function(k, n) {
    const path = [];
    const result = [];

    const dfs = (i, t) => {
        const d = k - path.length;
        if (t < 0 || t > (i * 2 - d + 1) * d / 2) return;
        if (d === 0) {
            result.push([...path]);
            return;
        }

        if (i > d) {
            dfs(i - 1, t);
        }
        path.push(i);
        dfs(i - 1, t - i);
        path.pop();
    };

    dfs(9, n);
    return result;
};