// https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length;
  const quickselect = (l, r) => {
    if (l === r) return nums[n - k];
    let pivot = nums[l];
    let i = l - 1;
    let j = r + 1;
    while (i < j) {
      do i++;
      while (nums[i] < pivot);
      do j--;
      while (nums[j] > pivot);
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    if (n - k <= j) return quickselect(l, j);
    else return quickselect(j + 1, r);
  };
  return quickselect(0, n - 1);
};
