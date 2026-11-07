/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let dummy = new ListNode(0 , null);
    let current = dummy;

    while(l1 || l2 || carry) {
        let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = Math.floor(val / 10);
        val = val % 10;

        current.next = new ListNode(val, null);
        current = current.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next;
};