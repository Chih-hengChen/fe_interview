// https://leetcode.cn/problems/maximum-depth-of-binary-tree
/**
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
var maxDepth = function (root) {
  if (!root) return 0;
  const l_max = maxDepth(root.left);
  const r_max = maxDepth(root.right);
  return Math.max(l_max, r_max) + 1;
};
