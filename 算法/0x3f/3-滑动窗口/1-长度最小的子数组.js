/** https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let sum = 0;
    const n = nums.length;
    let left = 0;
    let result = n + 1;

    for (let right = 0; right < n; right++) {
        const x = nums[right];
        sum += x;
        while (sum >= target) {
            result = Math.min(result, right - left + 1);
            sum -= nums[left];
            left += 1;
        }
    }

    return result >= n + 1 ? 0 : result;
};
