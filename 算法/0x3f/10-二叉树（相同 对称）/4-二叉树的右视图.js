/** https://leetcode.cn/problems/binary-tree-right-side-view/description/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    const f = (node, depth) => {
        if (!node) return;
        if (depth === result.length) result.push(node.val);
        f(node.right, depth + 1);
        f(node.left, depth + 1);
    };
    f(root, 0);
    return result;
};