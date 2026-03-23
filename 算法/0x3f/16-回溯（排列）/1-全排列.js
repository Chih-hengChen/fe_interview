/** https://leetcode.cn/problems/permutations/description/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const n = nums.length;
    const path = [];
    const result = [];

    const dfs = (i, s) => {
        if (path.length === n) {
            result.push([...path]);
            return;
        }

        for (let x of s) {
            path.push(x);
            dfs(i + 1, s.filter(item => item !== x));
            path.pop();
        }
    };
    dfs(0, nums);
    return result;
};