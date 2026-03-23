/** https://leetcode.cn/problems/trapping-rain-water/description/
 * 
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let i = 0;
    let j = height.length - 1;
    let pre_max = height[i];
    let suf_max = height[j];
    let result = 0;
    while (i <= j) {
        pre_max = Math.max(pre_max, height[i]);
        suf_max = Math.max(suf_max, height[j]);

        if (height[i] < height[j]) {
            result += pre_max - height[i];
            i += 1;
        } else {
            result += suf_max - height[j];
            j -= 1;
        }
    }
    return result;
};