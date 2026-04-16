// https://leetcode.cn/problems/basic-calculator-ii
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  s = s.trim();
  const stk = [];
  let preSign = "+";
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== " ") {
      num = num * 10 + Number(s[i]);
    }

    if (isNaN(Number(s[i])) || i === n - 1) {
      switch (preSign) {
        case "+":
          stk.push(num);
          break;
        case "-":
          stk.push(-num);
          break;
        case "*":
          stk.push(stk.pop() * num);
          break;
        default:
          stk.push((stk.pop() / num) | 0);
      }
      preSign = s[i];
      num = 0;
    }
  }

  let result = 0;
  while (stk.length) {
    result += stk.pop();
  }
  return result;
};
