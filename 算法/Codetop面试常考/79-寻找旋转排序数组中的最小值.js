// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    const mid = (l + r) >> 1;
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  return nums[r];
};
