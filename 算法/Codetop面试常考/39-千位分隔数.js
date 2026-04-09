// https://leetcode.cn/problems/thousand-separator
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
  let result = "";
  let str = n.toString();
  let j = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    if (j && j % 3 === 0) {
      result = "." + result;
    }
    result = str[i] + result;
    j++;
  }
  return result[0] === "." ? result.slice(1) : result;
};
