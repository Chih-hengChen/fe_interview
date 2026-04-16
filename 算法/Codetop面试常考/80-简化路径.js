// https://leetcode.cn/problems/simplify-path
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stk = [];
  for (const s of path.split("/")) {
    if (s === "" || s === ".") continue;

    if (s !== "..") {
      stk.push(s);
    } else if (stk.length > 0) {
      stk.pop();
    }
  }

  return "/" + stk.join("/");
};
