/** https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv/description/
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const f = Array(k + 2).fill(null).map(() => Array(2).fill(-Infinity));
    for (let j = 1; j <= k + 1; j++) {
        f[j][0] = 0;
    }
    for (const p of prices) {
        for (let j = k + 1; j > 0; j--) {
            f[j][0] = Math.max(f[j][0], f[j][1] + p);
            f[j][1] = Math.max(f[j][1], f[j - 1][0] - p);
        }
    }
    return f[k + 1][0];
};