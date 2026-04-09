// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if (!root) return result;
    let cur = [root];
    while (cur.length) {
        const vals = [];
        const nxt = [];
        cur.forEach(node => {
            vals.push(node.val);
            if (node.left) nxt.push(node.left);
            if (node.right) nxt.push(node.right);
        });
        result.push(vals);
        cur = nxt;
    }
    return result;
};