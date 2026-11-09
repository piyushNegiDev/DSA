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
var oddEvenList = function(head) {
    let current = head;
    let count = 0;

    let lastOdd = null;
    let firstEven = null;
    let lastEven = null;

    while(current) {
        count++;
        let next = current.next;
        if(count % 2 !== 0) {
            current.next = current.next?.next;
            lastOdd = current;
        } else {
            if(count === 2) {
                firstEven = current;
            }
            current.next = current.next?.next;
            lastEven = current;
        }
        current = next;
    }

    if(head) {
        lastOdd.next = firstEven;
    }

    if(lastEven) {
        lastEven.next = null
    }

    return head;
};