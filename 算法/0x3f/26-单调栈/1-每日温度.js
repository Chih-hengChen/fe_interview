/** https://leetcode.cn/problems/daily-temperatures/description/
 * @param {number[]} temperatures
 * @return {number[]}
 */
// 从右到左
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stk = [];

    for (let i = n - 1; i >= 0; i--) {
        const t = temperatures[i];
        while (stk.length && temperatures[stk[stk.length - 1]] <= t) {
            stk.pop();
        }
        if (stk.length) {
            result[i] = stk[stk.length - 1] - i;
        }
        stk.push(i);
    }
    return result;
};

// 从左到右
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;
    const result = new Array(n).fill(0);
    const stk = [];

    for (let i = 0; i < n; i++) {
        const t = temperatures[i];
        while (stk.length && t > temperatures[stk[stk.length - 1]]) {
            const j = stk.pop();
            result[j] = i - j;
        }
        stk.push(i);
    }
    return result;
};