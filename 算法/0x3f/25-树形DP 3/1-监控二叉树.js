/** https://leetcode.cn/problems/binary-tree-cameras/description/
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
var minCameraCover = function(root) {
    const dfs = (node) => {
        if (!node) return [Infinity, 0, 0];
        const [l_choose, l_fa, l_son] = dfs(node.left);
        const [r_choose, r_fa, r_son] = dfs(node.right);
        const choose = Math.min(l_choose, l_fa, l_son) + Math.min(r_choose, r_fa, r_son) + 1;
        const by_fa = Math.min(l_choose, l_son) + Math.min(r_choose, r_son);
        const by_son = Math.min(l_choose + r_son, r_choose + l_son, l_choose + r_choose);
        return [choose, by_fa, by_son];
    };
    const [c, f, s] = dfs(root);
    return Math.min(c, s);
};