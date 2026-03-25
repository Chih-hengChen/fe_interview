// https://leetcode.cn/problems/valid-parentheses/description/
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const stk = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (map[s[i]] !== stk.pop()) {
                return false;
            }
        } else {
            stk.push(s[i]);
        }
    }
    return stk.length === 0;
};