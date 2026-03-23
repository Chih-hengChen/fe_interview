/** https://leetcode.cn/problems/diameter-of-binary-tree/description/
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
var diameterOfBinaryTree = function(root) {
    let result = 0;

    const dfs = (node) => {
        if (!node) return -1;
        const l_len = dfs(node.left) + 1;
        const r_len = dfs(node.right) + 1;
        result = Math.max(result, l_len + r_len);
        return Math.max(l_len, r_len);
    };
    dfs(root);
    return result;
};