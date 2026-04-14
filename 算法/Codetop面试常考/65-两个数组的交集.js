// https://leetcode.cn/problems/intersection-of-two-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const result = [];
  for (let x of nums2) {
    if (set.delete(x)) {
      result.push(x);
    }
  }
  return result;
};
