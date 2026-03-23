/** https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    const f = Array(n + 2).fill(null).map(() => [0, 0]);
    f[1][1] = -Infinity;
    for (let i = 0; i < n; i++) {
        f[i + 2][0] = Math.max(f[i + 1][0], f[i + 1][1] + prices[i]);
        f[i + 2][1] = Math.max(f[i + 1][1], f[i][0] - prices[i]);
    }
    return f[n + 1][0];
};