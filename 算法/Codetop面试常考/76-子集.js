// https://leetcode.cn/problems/subsets
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const path = [];
  const n = nums.length;
  const dfs = (i) => {
    if (i === n) {
      result.push([...path]);
      return;
    }
    dfs(i + 1);
    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
  };
  dfs(0);
  return result;
};
