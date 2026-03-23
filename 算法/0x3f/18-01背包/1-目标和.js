/** https://leetcode.cn/problems/target-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let t = nums.reduce((a, b) => a += b, 0) + target;
    if (t < 0 || t % 2) return 0;
    t = Math.floor(t / 2);

    const dfs = (i, c) => {
        if (i < 0) {
            return c === 0 ? 1 : 0;
        }

        if (c < nums[i]) {
            return dfs(i - 1, c);
        }
        return dfs(i - 1, c) + dfs(i - 1, c - nums[i]);
    };
    return dfs(nums.length - 1, t);
};

// 递推方式
var findTargetSumWays2 = function(nums, target) {
    let t = nums.reduce((a, b) => a += b, 0) + target;
    if (t < 0 || t % 2) return 0;
    t = Math.floor(t / 2);
    const n = nums.length;
    const f = [];
    for (let i = 0; i < n + 2; i++) {
        f[i] = new Array(t + 1).fill(0);
    }
    f[0][0] = 1;

    for (let i = 0; i < n; i++) {
        for (let c = 0; c <= t; c++) {
            if (c < nums[i]) {
                f[i + 1][c] = f[i][c]; 
            } else {
                f[i + 1][c] = f[i][c] + f[i][c - nums[i]];
            }
        }
    }
    return f[n][t];
};

var findTargetSumWays3 = function(nums, target) {
    let t = nums.reduce((a, b) => a += b, 0) + target;
    if (t < 0 || t % 2) return 0;
    t = Math.floor(t / 2);
    const f = new Array(t + 1).fill(0);
    f[0] = 1;

    for (let x of nums) {
        for (let c = t; c >= x; c--) {
            f[c] += f[c -x];
        }
    }

    return f[t];
};

