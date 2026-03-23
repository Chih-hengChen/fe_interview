/** https://leetcode.cn/problems/reorder-list/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const getMiddle = (node) => {
        let slow = node;
        let fast = node;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    };
    const reverseList = (node) => {
        let pre = null;
        let cur = node;
        while (cur) {
            const nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }
        return pre;
    }

    let mid = getMiddle(head);
    let head2 = reverseList(mid);
    while (head2.next) {
        const nxt = head.next;
        const nxt2 = head2.next;
        head.next = head2;
        head2.next = nxt;
        head = nxt;
        head2 = nxt2;
    }
};