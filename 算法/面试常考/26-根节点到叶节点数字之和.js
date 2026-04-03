// https://leetcode.cn/problems/sum-root-to-leaf-numbers
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
var sumNumbers = function (root) {
  let result = 0;

  const dfs = (node, path) => {
    path.push(node.val);
    if (!node.left && !node.right) {
      result += Number(path.join(""));
      path.pop();
      return;
    }
    if (node.left) dfs(node.left, path);
    if (node.right) dfs(node.right, path);
    path.pop();
  };
  dfs(root, []);
  return result;
};
