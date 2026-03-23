/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
    const stk = [];

    for (let i = 0; i < height.length; i++) {
        const h = height[i];
        while (stk.length && h > height[stk[stk.length - 1]]) {
            const h_mid = height[stk.pop()]; // 中间的高度
            if (!stk.length) break; // 没有左边界了，无法形成积水
            const left = stk[stk.length - 1]; // 左边界
            const dh = Math.min(height[left], h) - h_mid; // 高度差
            ans += dh * (i - left - 1); // 累加积水量，宽度是 i - left - 1，因为 left 和 i 都不算在内
        }
        stk.push(i);
    }
    return ans;
};