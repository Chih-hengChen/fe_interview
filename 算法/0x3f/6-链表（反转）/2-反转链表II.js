/** https://leetcode.cn/problems/reverse-linked-list-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let dummyNode = new ListNode(null, head);
    let p0 = dummyNode;
    
    for (let i = 0; i < left - 1; i++) {
        p0 = p0.next;
    }

    let pre = null;
    let cur = p0.next;
    for (let i = 0; i < right - left + 1; i++) {
        const nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt;
    }
    p0.next.next = cur;
    p0.next = pre;

    return dummyNode.next;
};