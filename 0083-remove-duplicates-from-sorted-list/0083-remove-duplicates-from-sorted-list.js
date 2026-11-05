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
    let first = head;
    let second = head?.next;

    while(first && second) {
        while(second && first.val === second.val) {
            second = second.next;
        }
        first.next = second;
        first = second;
        second = second?.next;
    }

    return head;
};