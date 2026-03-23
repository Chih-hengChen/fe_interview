/** https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/ 
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (nums[left] !== target) return [-1, -1];
    right = nums.length - 1;
    let l = left;
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return [l, right];
};