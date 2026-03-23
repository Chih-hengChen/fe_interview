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
 * @return {boolean}
 */

// 前序遍历
var isValidBST1 = function(root) {
    const check = (node, left=-Infinity, right=Infinity) => {
        if (!node) return true;
        const x = node.val;
        return (x > left) && (x < right) && check(node.left,left, x) && check(node.right, x, right);
    };
    return check(root);
};

// 中序遍历
var isValidBST2 = function(root) {
    let pre = -Infinity;
    const check = (node) => {
        if (!node) return true;
        if (!check(node.left)) return false;
        if (node.val <= pre) return false;
        pre = node.val;
        return check(node.right);
    };
    return check(root);
};

// 后序遍历
var isValidBST3 = function(root) {
    const check = (node) => {
        if (!node) return [Infinity, -Infinity]; // 表示true
        const [l_min, l_max] = check(node.left);
        const [r_min, r_max] = check(node.right);
        const x = node.val;
        if (x <= l_max || x >= r_min) return [-Infinity, Infinity]; // 表示false，不是二叉搜索树
        return [Math.min(l_min, x), Math.max(r_max, x)];
    };
    return check(root)[1] !== Infinity;
};