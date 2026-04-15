// https://leetcode.cn/problems/n-ary-tree-level-order-traversal
/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const level = [root];
  const result = [];
  while (level.length) {
    let n = level.length;
    const res = [];
    while (n--) {
      const node = level.shift();
      res.push(node.val);
      if (node.children) level.push(...node.children);
    }
    result.push(res);
  }
  return result;
};
