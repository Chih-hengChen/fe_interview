/** https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let cntMap = {};
    let left = 0;
    let result = 0;

    for (let right = 0; right < s.length; right++) {
        cntMap[s[right]] = cntMap[s[right]] ? cntMap[s[right]] + 1 : 1;

        while (cntMap[s[right]] > 1) {
            cntMap[s[left]] -= 1;
            left += 1;
        }
        result = Math.max(right - left + 1, result);
    }
    return result;
};