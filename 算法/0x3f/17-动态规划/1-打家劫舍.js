/** https://leetcode.cn/problems/house-robber/
 * @param {number[]} nums
 * @return {number}
 */
// 记忆化搜索
var rob = function(nums) {
    const n = nums.length;
    const cache = new Array(n).fill(-1);
    const dfs = (i) => {
        if (i < 0) return 0;
        if (cache[i] !== -1) return cache[i];
        const res = Math.max(dfs(i - 1), dfs(i - 2) + nums[i]);
        cache[i] = res;
        return res;
    };

    return dfs(n - 1);
};

// 递推
var rob2 = function(nums) {
    const n = nums.length;
    const f = new Array(n + 2).fill(0);
    for (let i = 0; i < n; i++) {
        f[i + 2] = Math.max(f[i + 1], f[i] + nums[i]);
    }
    return f[n + 1];
};

// 递推空间优化
var rob3 = function(nums) {
    const n = nums.length;
    let f0 = 0;
    let f1 = 0;
    for (let i = 0; i < n; i++) {
        let new_f = Math.max(f0 + nums[i], f1);
        f0 = f1;
        f1 = new_f
    }
    return f1;
};