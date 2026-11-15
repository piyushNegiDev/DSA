/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head;
    let start = null;
    let end = null;

    let current = head;
    let count = 0;

    while(current) {
        count++;
        if(count === left) {
            start = current;
        } 
        if(count === right) {
            end = current.next;
        }

        current = current.next;
    }

    count = 0;
    current = head;
    let prev = null;

    while(current) {
        count++;
                
        if(count === left) {
            let listCurrent = current;
            let prevNode = null;

            while(listCurrent !== end) {
                let next = listCurrent.next;
                listCurrent.next = prevNode;
                prevNode = listCurrent;
                listCurrent = next;
            }

            if(prev !== null) {
                prev.next = prevNode;
            }

            start.next = end;

            if(prev === null) {
                return prevNode;
            }
        }

        prev = current;
        current = current.next;
    }

    return head;
};