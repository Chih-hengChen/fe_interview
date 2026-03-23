/** https://leetcode.cn/problems/subarray-product-less-than-k/
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if (k <= 1) return 0;

    let left = 0;
    let prod = 1;
    let result = 0;

    for (let right = 0; right < nums.length; right++) {
        prod *= nums[right];
        while (prod >= k) {
            prod /= nums[left];
            left += 1;
        }
        result += right - left + 1;
    }
    return result;
};