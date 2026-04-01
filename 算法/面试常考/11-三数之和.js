// https://leetcode.cn/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    const x = nums[i];
    if (i > 0 && x === nums[i - 1]) continue;
    if (x + nums[i + 1] + nums[i + 2] > 0) break;
    if (x + nums[n - 2] + nums[n - 1] < 0) continue;

    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      const sum = x + nums[j] + nums[k];
      if (sum === 0) {
        result.push([x, nums[j], nums[k]]);
        j += 1;
        while (j < k && nums[j - 1] === nums[j]) {
          j += 1;
        }
        k -= 1;
        while (j < k && nums[k + 1] === nums[k]) {
          k -= 1;
        }
      } else if (sum > 0) {
        k -= 1;
      } else {
        j += 1;
      }
    }
  }
  return result;
};
