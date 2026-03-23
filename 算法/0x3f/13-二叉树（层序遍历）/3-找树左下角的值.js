/** https://leetcode.cn/problems/find-bottom-left-tree-value/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    const reuslt = [];
    if (!root) return reuslt;

    let level = [root];
    while (level.length) {
        let n = level.length;
        while (n--) {
            const node = level.shift();
            reuslt.push(node.val);
            if (node.right) level.push(node.right);
            if (node.left) level.push(node.left);
        }
    }
    return reuslt.pop();
};