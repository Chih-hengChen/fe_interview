// https://leetcode.cn/problems/reorder-list
/**
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
var reorderList = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let prev = null;
  let cur = slow;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  cur = head;
  while (prev.next) {
    const next = cur.next;
    const prevNext = prev.next;
    cur.next = prev;
    prev.next = next;
    cur = next;
    prev = prevNext;
  }
};
