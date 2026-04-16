// https://leetcode.cn/problems/binary-tree-maximum-path-sum
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
var maxPathSum = function (root) {
  let result = -Infinity;

  const dfs = (node) => {
    if (!node) return 0;
    const l_max = Math.max(dfs(node.left), 0);
    const r_max = Math.max(dfs(node.right), 0);

    const currentPath = node.val + l_max + r_max;
    result = Math.max(result, currentPath);

    return node.val + Math.max(l_max, r_max);
  };
  dfs(root);
  return result;
};
