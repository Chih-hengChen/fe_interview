// https://leetcode.cn/problems/valid-palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;

  const isLetter = (char) => {
    if (typeof char !== "string") return false;
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    );
  };
  while (i <= j) {
    while (i <= j && !isLetter(s[i])) i++;
    while (i <= j && !isLetter(s[j])) j--;
    if (i > j) break;
    if (s[i++].toLowerCase() !== s[j--].toLowerCase()) return false;
  }
  return true;
};
