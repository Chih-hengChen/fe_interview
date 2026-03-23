/** https://leetcode.cn/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
// 每次递归选或者不选
var subsets = function(nums) {
    const result = [];
    const path = [];
    const n = nums.length;
    const dfs = (i) => {
        if (i === n) {
            result.push([...path]);
            return;
        }
        dfs(i + 1); // 不选直接进行递归
        path.push(nums[i]); // 选了当前数，然后进行递归
        dfs(i + 1);
        path.pop(); // 回退到上一个状态，继续进行递归
    };
    dfs(0);
    return result;
};

// 站在答案的视角，每次选一个数
var subsets2 = function(nums) {
    const result = [];
    const path = [];
    const n = nums.length;
    const dfs = (i) => {
        result.push([...path]); // 每次递归都把当前的路径加入结果中，可以说每次递归都是结果集的一部分
        if (i === n) {
            return;
        }
        for (let j = i; j < n; j++) {
            path.push(nums[j]);
            dfs(j + 1);
            path.pop();
        }
    };
    dfs(0);
    return result;
};