/** https://leetcode.cn/problems/balanced-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    const getHeight = (node) => {
        if (!node) return 0;
        let left = getHeight(node.left);
        if (left === -1) return -1;
        let right = getHeight(node.right);
        if (right === -1 || Math.abs(right - left) > 1) return -1;
        return Math.max(left, right) + 1; 
    };
    return getHeight(root) !== -1;
};