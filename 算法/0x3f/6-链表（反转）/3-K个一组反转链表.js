/** https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let n = 0;
    let cur = head;
    while (cur) {
        cur = cur.next;
        n += 1;
    }

    let dummyHead = new ListNode(null, head);
    
    let p0 = dummyHead;
    let pre = null;
    cur = p0.next;

    while (n >= k) {
        n -= k;
        for (let i = 0; i < k; i++) {
            const nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }

        const next = p0.next;
        p0.next.next = cur;
        p0.next = pre;
        p0 = next;
    }

    return dummyHead.next;
};