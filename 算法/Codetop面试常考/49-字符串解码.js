// https://leetcode.cn/problems/decode-string
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let countStk = [];
  let num = 0;
  let stringStk = [];
  let currentString = "";

  for (let c of s) {
    if (!isNaN(Number(c))) {
      num = num * 10 + Number(c);
    } else if (c === "[") {
      countStk.push(num);
      stringStk.push(currentString);
      num = 0;
      currentString = "";
    } else if (c === "]") {
      const repeatTimes = countStk.pop();
      const prevString = stringStk.pop();
      currentString = prevString + currentString.repeat(repeatTimes);
    } else {
      currentString += c;
    }
  }
  return currentString;
};
