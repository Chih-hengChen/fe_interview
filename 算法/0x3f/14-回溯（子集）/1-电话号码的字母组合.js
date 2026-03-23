/** https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    const len = digits.length;

    const result = [];
    if (!digits) return result;
    const path = [];

    const dfs = (i) => {
        if (i === len) {
            result.push(path.join(''));
            return;
        }
        const str = mapping[Number(digits[i])];
        for (let j = 0; j < str.length; j++) {
            path[i] = str[j];
            dfs(i + 1);
        }
    };
    dfs(0);
    return result;
};