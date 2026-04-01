// https://leetcode.cn/problems/path-sum/description/
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right) return targetSum === root.val;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  const queue = [[root, root.val]];

  while (queue.length) {
    const [node, val] = queue.shift();
    if (!node.left && !node.right && targetSum === val) return true;
    if (node.left) queue.push([node.left, val + node.left.val]);
    if (node.right) queue.push([node.right, val + node.right.val]);
  }
  return false;
};
