/** https://leetcode.cn/problems/binary-tree-maximum-path-sum/
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
var maxPathSum = function(root) {
    let result = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;
        
        const l_res = Math.max(0, dfs(node.left));   // 只取正数贡献
        const r_res = Math.max(0, dfs(node.right));  // 只取正数贡献
        
        // 当前节点作为路径连接点的最大值
        const currentPath = node.val + l_res + r_res;
        result = Math.max(result, currentPath);
        
        // 向上返回时，只能返回单边的最大值
        return node.val + Math.max(l_res, r_res);
    };
    
    dfs(root);
    return result;
};