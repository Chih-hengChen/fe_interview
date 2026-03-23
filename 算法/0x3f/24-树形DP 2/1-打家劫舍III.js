/** https://leetcode.cn/problems/house-robber-iii/description/
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
var rob = function(root) {
    const dfs = (node) => {
        if (!node) return [0, 0];
        const [l_rob, l_not_rob] = dfs(node.left);
        const [r_rob, r_not_rob] = dfs(node.right);

        const node_rob = l_not_rob + r_not_rob + node.val;
        const node_not_rob = Math.max(l_rob, l_not_rob) + Math.max(r_rob, r_not_rob);
        return [node_rob, node_not_rob];
    };
    return Math.max(...dfs(root));
};