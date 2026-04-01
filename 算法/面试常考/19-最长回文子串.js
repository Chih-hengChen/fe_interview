// https://leetcode.cn/problems/longest-palindromic-substring/description/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const isPalindrome = (str) => {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
      if (str[i] !== str[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substr = s.substring(i, j);
      if (substr.length < result.length) {
        continue;
      }
      if (substr.length > result.length && isPalindrome(substr)) {
        result = substr;
      }
    }
  }
  return result;
};

var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let result = "";
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.substring(l + 1, r);
  };
  for (let i = 0; i < s.length; i++) {
    let odd = expand(i, i);
    let even = expand(i, i + 1);
    let longer = odd.length > even.length ? odd : even;
    if (longer.length > result.length) {
      result = longer;
    }
  }
  return result;
};
