/** https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const x = root.val;
    if (x > p.val && x > q.val) return lowestCommonAncestor(root.left, p, q);
    if (x < p.val && x < q.val) return lowestCommonAncestor(root.right, p, q);
    return root;
};