/** https://leetcode.cn/problems/longest-increasing-subsequence/description/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const cache = new Array(n + 1).fill(0);

    const dfs = (i) => {
        let result = 0;
        if (cache[i]) return cache[i];
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                result = Math.max(result, dfs(j));
            }
        }
        cache[i] = result + 1;
        return cache[i];
    }

    let result = 0;
    for (let i = 0; i < n; i++) {
        result = Math.max(result, dfs(i));
    }
    return result;
};

// 递推
var lengthOfLIS = function(nums) {
    const n = nums.length;
    const f = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                f[i] = Math.max(f[i], f[j]);
            }
        }
        f[i] += 1;
    }
    return Math.max(...f);
};