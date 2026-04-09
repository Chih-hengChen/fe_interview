// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  let low = prices[0];
  for (let price of prices) {
    result = Math.max(result, price - low);

    if (price < low) {
      low = price;
    }
  }

  return result;
};
