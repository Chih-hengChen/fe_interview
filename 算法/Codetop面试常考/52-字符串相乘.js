// https://leetcode.cn/problems/multiply-strings
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const n = num1.length;
  const m = num2.length;
  const result = new Array(n + m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result[i + j + 1] += Number(num1[i]) * Number(num2[j]);
    }
  }
  let carry = 0;
  for (let i = n + m - 1; i >= 0; i--) {
    const sum = result[i] + carry;
    result[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  let str = result.join("");
  let start = 0;
  while (start < str.length && str[start] === "0") start++;
  return start === str.length ? "0" : str.slice(start);
};
