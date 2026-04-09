// https://leetcode.cn/problems/two-sum/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const source = target - nums[i];
        if (map.has(source)) {
            return [i, map.get(source)];
        } else {
            map.set(nums[i], i);
        }
    }
};