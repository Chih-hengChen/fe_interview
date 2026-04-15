// https://leetcode.cn/problems/reverse-words-in-a-string
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const path = s.split(" ");
  for (let i = path.length - 1; i >= 0; i--) {
    if (path[i] === "") {
      path.splice(i, 1);
    }
  }
  const result = path.reverse().join(" ");
  let i = 0;
  while (result[i] === " ") i++;
  let j = result.length - 1;
  while (result[j] === " ") j--;

  return result.slice(i, j + 1);
};
