// https://leetcode.cn/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let result = 0;
    const array = [];
    for (let i = 0; i < s.length; i++) {
        while (array.includes(s[i])) { //
            array.shift();
        }
        array.push(s[i]);
        result = Math.max(result, array.length);
    }
    return result;
};

var lengthOfLongestSubstring = function(s) {
    let left = 0;
    const set = new Set();
    let result = 0;
    for (let right = 0; right < s.length; right++) {
        const substr = s.slice(left, right + 1);
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        result = Math.max(result, set.size);
    }
    return result;
};