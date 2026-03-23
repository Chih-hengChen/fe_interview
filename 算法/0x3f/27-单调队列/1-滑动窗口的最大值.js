/** https://leetcode.cn/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const que = [];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        while (que.length && nums[que[que.length - 1]] <= x) {
            que.pop();
        }
        que.push(i);

        if (i - que[0] + 1 > k) {
            que.shift();
        }

        if (i >= k - 1) {
            result.push(nums[que[0]]);
        }
    }
    return result;
};