/** https://leetcode.cn/problems/palindrome-partitioning/description/
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const n = s.length;
    const path = [];
    const result = [];

    const dfs = (i) => {
        if (i === n) {
            result.push([...path]);
            return;
        }

        for (let j = i; j < n; j++) {
            const str = s.substring(i, j + 1);
            if (str === str.split('').reverse().join('')) {
                path.push(str);
                dfs(j + 1);
                path.pop();
            }
        }
    };
    dfs(0);
    return result;
};