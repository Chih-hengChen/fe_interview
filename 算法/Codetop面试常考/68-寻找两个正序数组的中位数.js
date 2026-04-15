// https://leetcode.cn/problems/median-of-two-sorted-arrays
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n) {
    [nums1, nums2] = [nums2, nums1];
  }
  let i = 0;
  let j = Math.floor((m + n + 1) / 2);
  nums1 = [-Infinity, ...nums1, Infinity];
  nums2 = [-Infinity, ...nums2, Infinity];
  while (true) {
    if (nums1[i] <= nums2[j + 1] && nums1[i + 1] > nums2[j]) {
      const max1 = Math.max(nums1[i], nums2[j]);
      const min2 = Math.min(nums1[i + 1], nums2[j + 1]);
      return (m + n) % 2 ? max1 : (max1 + min2) / 2;
    }
    i++;
    j--;
  }
};
