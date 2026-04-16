// https://leetcode.cn/problems/combination-sum-ii
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  const dfs = (start, path, sum) => {
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      if (sum + candidates[i] > target) break;
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      dfs(i + 1, path, sum + candidates[i]);
      path.pop();
    }
  };

  dfs(0, [], 0);
  return result;
};
