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
var reverseKGroup = function(head, k) {
    if(k === 1 || !head.next) return head;

    let current = head;
    let start = head;
    let count = 0;

    var reverse = function(start) {
        let temp = start;
        let prev = null;

        while(temp) {
            let next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return {s:prev, e:start};
    }

    let newHead = null;
    let dummy = new ListNode(head, null);
    let prev = dummy;

    while(current) {
        count++;
        if(count === k) {
            let next = current.next;
            current.next = null;
            let {s, e} = reverse(start);
            prev.next = s;
            prev = e;
            start = next;
            current = next;
            count = 0;
        } else {
            current = current.next;
        }
    }

    prev.next = start;

    return dummy.next;
};