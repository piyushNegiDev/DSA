/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(0, head);
    let current = dummy.next;
    let prev = dummy;

    while(current) {
        while(current && current.val === val) {
            current = current.next;
        }
        prev.next = current;
        prev = current;
        current = current?.next;
    }

    return dummy.next;
};