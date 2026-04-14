// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  const root = new ListNode(preorder[0]);
  const rootIndex = inorder.indexOf(root.val);
  const leftSize = rootIndex;
  root.left = buildTree(
    preorder.slice(1, leftSize + 1),
    inorder.slice(0, rootIndex),
  );
  root.right = buildTree(
    preorder.slice(leftSize + 1),
    inorder.slice(rootIndex + 1),
  );

  return root;
};
