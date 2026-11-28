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
var rotateRight = function(head, k) {
    if(k === 0 || !head) return head;

    let tail = head;
    let len = 1;

    while(tail.next) {
        len++;
        tail = tail.next
    }  

    k = k % len;
    if(k === 0) return head;

    let newTail = len - k;
    current = head;
    let count = 0;

    while(current) {
        count++;
        if(count === newTail) break;
        current = current.next;
    }

    let newHead = current.next;
    current.next = null;
    tail.next = head;

    return newHead;
};