// https://leetcode.cn/problems/swap-nodes-in-pairs
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  const dummyHead = new ListNode(null, head);

  let prev = dummyHead;
  let cur = head;

  while (cur && cur.next) {
    // prev 0
    // cur  1
    // nxt  2
    // nnxt 3
    const nxt = cur.next;
    const nnxt = nxt.next;

    // 0 ---> 2
    prev.next = nxt;
    // 1 ---> 3
    cur.next = nnxt;
    // 2 ---> 1
    nxt.next = cur;

    prev = cur;
    cur = nnxt;
  }
  return dummyHead.next;
};
