// https://leetcode.cn/problems/restore-ip-addresses
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const isValid = (i, j) => {
    if (j - i > 3 || (j - i > 1 && s[i] === "0")) {
      return false;
    }
    return parseInt(s.slice(i, j)) <= 255;
  };

  const n = s.length;
  const result = [];
  for (let i = 1; i < n && isValid(0, i); i++) {
    for (let j = i + 1; j < n && isValid(i, j); j++) {
      for (let k = j + 1; k < n && isValid(j, k); k++) {
        if (isValid(k, n)) {
          result.push(
            `${s.slice(0, i)}.${s.slice(i, j)}.${s.slice(j, k)}.${s.slice(k, n)}`,
          );
        }
      }
    }
  }
  return result;
};

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const n = s.length;
  const result = [];
  const path = new Array(4);

  const dfs = (i, j, ipVal) => {
    if (i === n) {
      if (j === 4) {
        const [a, b, c, _] = path;
        result.push(
          `${s.slice(0, a)}.${s.slice(a, b)}.${s.slice(b, c)}.${s.slice(c)}`,
        );
        return;
      }
    }

    if (j === 4) {
      return;
    }

    const newVal = ipVal * 10 + parseInt(s[i]);
    if (newVal > 255) {
      return;
    }

    if (newVal > 0) {
      dfs(i + 1, j, newVal);
    }

    path[j] = i + 1;
    dfs(i + 1, j + 1, 0);
  };

  dfs(0, 0, 0);
  return result;
};
