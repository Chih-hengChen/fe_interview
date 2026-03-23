/** https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const result = [];
    if (!root) return result;
    const level = [root];
    let order = false;
    while (level.length) {
        let n = level.length;
        const vals = [];
        while (n--) {
            const node = level.shift();
            vals.push(node.val);
            if (node.left) level.push(node.left);
            if (node.right) level.push(node.right);
        }
        result.push(order ? vals.reverse() : vals);
        order = !order;
    }
    return result;
};