/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let stack = [];
    let left = 0;
    let needed = 0;

    for(let char of s) {
        if(char === '(') {
            if(left === 1) {
                if(stack.length === 0) {
                    needed += 2;
                } else {
                    stack.pop();
                    needed++;
                }
            }
            stack.push(char);
            left = 0;
        } else {
            left++;
            if(left === 2) {
                if(stack.length === 0) {
                    needed++;
                } else {
                    stack.pop();
                }
                left = 0;
            }
        }
    }  

    if(stack.length !== 0) return needed + stack.length * 2 - left;
    return needed + left * 2;
};