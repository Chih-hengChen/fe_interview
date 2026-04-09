// https://leetcode.cn/problems/maximum-subarray/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0;
    let result = nums[0];
    nums.forEach(x => {
        pre = Math.max(pre + x, x);
        result = Math.max(result, pre);
    });
    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const f = new Array(nums.length);
    f[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        f[i] = Math.max(f[i - 1], 0) + nums[i];
    };
    return Math.max(...f);
};