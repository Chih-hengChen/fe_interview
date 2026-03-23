/** https://leetcode.cn/problems/container-with-most-water/description/
 * 11. 盛水最多的容器
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let result = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        const area = Math.min(height[i], height[j]) * (j - i);
        result = Math.max(result, area);

        if (height[i] < height[j]) {
            i += 1;
        } else {
            j -= 1;
        }
    }

    return result;
};