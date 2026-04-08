// https://leetcode.cn/problems/reverse-nodes-in-k-group
/**
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
var reverseKGroup = function (head, k) {
  let cnt = 0;
  let cur = head;
  while (cur) {
    cnt += 1;
    cur = cur.next;
  }

  const dummyHead = new ListNode(null, head);
  cur = head;
  let prev = null;
  let p0 = dummyHead;
  while (cnt >= k) {
    cnt -= k;

    for (let i = 0; i < k; i++) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    const next = p0.next;
    p0.next.next = cur;
    p0.next = prev;
    p0 = next;
  }
  return dummyHead.next;
};
