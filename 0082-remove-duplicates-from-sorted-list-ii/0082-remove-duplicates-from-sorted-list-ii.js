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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head);
    let current = dummy.next;
    let next = dummy.next?.next;
    let prev = dummy;

    while(current && next) {
        if(current.val === next.val) {
            while(next && current.val === next.val) {
                next = next.next;
            }
            prev.next = next;
            current = next;
            next = next?.next;
        } else {
            current = current.next;
            next = next.next;
            prev = prev.next;
        }
    }

    return dummy.next;
};