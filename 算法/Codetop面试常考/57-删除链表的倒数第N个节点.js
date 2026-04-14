// https://leetcode.cn/problems/remove-nth-node-from-end-of-list
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummyNode = new ListNode(null, head);
  let right = dummyNode;
  while (n--) {
    right = right.next;
  }
  let left = dummyNode;
  while (right.next) {
    right = right.next;
    left = left.next;
  }
  left.next = left.next.next;
  return dummyNode.next;
};
